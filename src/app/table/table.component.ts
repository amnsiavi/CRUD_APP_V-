import { Component, inject, OnInit, signal, DestroyRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { type Comments } from '../Types/comments.model';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { DeleteCommentComponent } from '../shared/delete-comment/delete-comment.component';
import { LoadinSpinnerComponent } from '../shared/loadin-spinner/loadin-spinner.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    LoadinSpinnerComponent,
    AddCommentComponent,
    DeleteCommentComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef);

  isFetching = this.apiService.isFetching;
  data = signal<Comments[]>([]);

  ngOnInit(): void {
    this.apiService.loadedUsers();
    const subscription = this.apiService.observer$.subscribe((value) => {
      this.data.update((oldValues) => value);
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
