import {
  Component,
  inject,
  OnInit,
  signal,
  DestroyRef,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { ApiService } from '../services/api.service';
import { type Comments } from '../Types/comments.model';
import { AddCommentComponent } from '../shared/add-comment/add-comment.component';
import { DeleteCommentComponent } from '../shared/delete-comment/delete-comment.component';
import { LoadinSpinnerComponent } from '../shared/loadin-spinner/loadin-spinner.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    LoadinSpinnerComponent,
    AddCommentComponent,
    DeleteCommentComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef);
  private cdf = inject(ChangeDetectorRef);

  isFetching = this.apiService.isFetching;
  data = signal<Comments[]>([]);

  ngOnInit(): void {
    this.apiService.loadedUsers();
    const subscription = this.apiService.observer$.subscribe((value) => {
      this.data.set(value);
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  deleteComment(id: number) {
    console.log('Deleting Comment ID', id);
    this.apiService.deleteComment(id);
    const subscrition = this.apiService.observer$.subscribe((val) => {
      this.data.update((oldValues) => val);
    });
    this.destroyRef.onDestroy(() => {
      subscrition.unsubscribe();
    });
  }
}
