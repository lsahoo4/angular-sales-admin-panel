import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-average-value',
  standalone: true,
  imports: [ 
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './average-value.component.html',
  styleUrl: './average-value.component.css'
})
export class AverageValueComponent {

}
