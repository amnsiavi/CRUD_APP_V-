import {
  Component,
  inject,
  OnInit,
  input,
  Input,
  DestroyRef,
} from '@angular/core';
import { type Comments } from '../Types/comments.model';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddSucessComponent } from '../shared/add-sucess/add-sucess.component';
@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [FormsModule, AddSucessComponent],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent implements OnInit {
  @Input({ required: true }) data!: string;
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef);
  private commentIndex!: number;
  private comment?: Comments;
  private router = inject(Router);

  isSucess: boolean = false;

  commentData!: Comments[];
  postIdField = '';
  nameField = '';
  emailField = '';
  commentField = '';

  ngOnInit(): void {
    this.apiService.getComments();
    const subscription = this.apiService.observer$.subscribe((val) => {
      this.commentData = val;
    });
    let comment = this.commentData.find(
      (com) => com.id === parseInt(this.data)
    );
    if (comment) {
      this.commentIndex = this.commentData.indexOf(comment);
    }

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onSubmit() {
    let commentData: Comments = {
      id: Math.floor(Math.random() * 55),
      postId: parseInt(this.postIdField),
      name: this.nameField,
      email: this.emailField,
      body: this.commentField,
    };
    this.apiService.addComment(this.commentIndex, commentData);
    const subscribe = this.apiService.observer$.subscribe((val) => {
      this.commentData = val;
    });
    this.isSucess = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);
  }
}
