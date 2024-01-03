import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-returning-cuctomer',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './returning-cuctomer.component.html',
  styleUrl: './returning-cuctomer.component.css'
})
export class ReturningCuctomerComponent {

}
