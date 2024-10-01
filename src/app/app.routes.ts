import { Routes } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-comment/:data',
    component: AddCommentComponent,
  },
];
