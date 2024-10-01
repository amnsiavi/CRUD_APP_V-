import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-sucess',
  standalone: true,
  imports: [],
  templateUrl: './add-sucess.component.html',
  styleUrl: './add-sucess.component.css',
})
export class AddSucessComponent {
  @Input({ required: true }) message!: string;
}
