import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentsFormComponent } from './pages/comments-form/comments-form.component';

//Component Imports
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TableComponent,
    RouterOutlet,
    CommentsFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CRUD-V2';
}
