import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Comments } from '../Types/comments.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Dependency Injectors
  private httpClient = inject(HttpClient);

  //Component Varaibles
  private comments = signal<Comments[]>([]);
  public isFetching = signal<boolean>(true);

  observer$ = new BehaviorSubject<Comments[]>([]);

  private URL = 'https://jsonplaceholder.typicode.com/comments';

  private fetch(url: string) {
    return this.httpClient.get<Comments[]>(url);
  }

  loadedUsers() {
    if (this.comments().length === 0) {
      this.fetch(this.URL).subscribe({
        next: (value) => {
          this.comments.set(value.slice(0, 5));
          this.observer$.next(this.comments());
        },
        error: (err) => console.dir(err),
        complete: () => {
          this.isFetching.update((prev) => false);
        },
      });
    } else {
      this.observer$.next(this.comments());
    }
  }
  deleteComment(id: number) {
    const updatedComments = this.comments().filter(
      (comment) => comment.id !== id
    );
    this.comments.update((oldValues) => updatedComments);
    this.observer$.next(this.comments());
  }
  addComment(currentIndex: number, newComment: Comments) {
    if (currentIndex === this.comments().length - 1) {
      this.comments().push(newComment);
      this.observer$.next(this.comments());
    } else {
      this.comments().splice(currentIndex + 1, 0, newComment);
      this.observer$.next(this.comments());
    }
  }
  getComments() {
    this.observer$.next(this.comments());
  }
}
