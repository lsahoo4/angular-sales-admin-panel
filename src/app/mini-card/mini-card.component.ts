import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TotalSaleComponent } from './total-sale/total-sale.component';
import { AverageValueComponent } from './average-value/average-value.component';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [ 
    MatCardModule,
    MatIconModule,
    TotalSaleComponent,
    AverageValueComponent
  ],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.css'
})
export class MiniCardComponent implements OnInit {

@Input({required: false}) data: any =  {} as any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
