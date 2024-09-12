import { Component } from '@angular/core';

//Component Imports
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CRUD-V2';
}
