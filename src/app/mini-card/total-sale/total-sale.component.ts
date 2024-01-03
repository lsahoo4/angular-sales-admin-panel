import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-total-sale',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './total-sale.component.html',
  styleUrl: './total-sale.component.css'
})
export class TotalSaleComponent {

}
