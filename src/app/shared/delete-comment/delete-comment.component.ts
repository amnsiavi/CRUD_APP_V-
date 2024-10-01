import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-delete-comment',
  standalone: true,
  imports: [],
  templateUrl: './delete-comment.component.html',
  styleUrl: './delete-comment.component.css',
})
export class DeleteCommentComponent {
  get imagePath() {
    return 'delete.png';
  }
  @Output() delete = new EventEmitter<number>();
  @Input({ required: true }) userId!: number;

  onDelete() {
    console.log('User id on del comp', this.userId);
    this.delete.emit(this.userId);
  }
}
