import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comments } from '../../Types/comments.model';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  @Output() commentData = new EventEmitter<Comments>();
  @Input({ required: true }) comment!: Comments;
  get imagePath() {
    return 'plus.png';
  }
  sendCommentData() {
    this.commentData.emit(this.comment);
  }
}
