import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Comments } from '../Types/comments.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  //private apiService = inject(ApiService);
  //private cdRef = inject(ChangeDetectorRef);
  //data = signal<Comments[]>([]);
  //ngOnInit(): void {
  //this.apiService.loadedUsers();
  //this.apiService.observer$.subscribe((value) => {
  //console.log('inside header component', value);
  //this.data.update((oldValue) => value);
  //});
  //this.cdRef.markForCheck();
  //}
}
