import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.css'],
  standalone: true,
  imports: [ NgChartsModule ]
})
export class ProductSalesChartComponent {

  public radarChartOptions: ChartOptions<'radar'> = {
    responsive: false
  };

  public radarChartLabels: any[] = ['Bags', 'Wallets', 'Cases', 'Others', 'Keyboards'];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40]},
      { data: [28, 48, 40, 19, 96, 27, 100]},
    ],
  };
  public radarChartType: ChartType = 'radar';

  constructor() { }
}
