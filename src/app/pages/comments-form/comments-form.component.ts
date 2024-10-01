import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comments-form',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css',
})
export class CommentsFormComponent {}
