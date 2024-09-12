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
    this.fetch(this.URL).subscribe({
      next: (value) => {
        this.comments.set(value);
        this.observer$.next([...this.comments()].splice(0, 11));
      },
      error: (err) => console.dir(err),
      complete: () => {
        this.isFetching.update((prev) => false);
      },
    });
  }
}
