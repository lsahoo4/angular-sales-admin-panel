import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.css'],
  standalone: true,
  imports: [ NgChartsModule ]
})
export class SalesTrafficChartComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false
  };

  public pieChartLabels: any[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['search', 'Direct', 'Social', 'Email', 'Unknown'],
    datasets: [
      {
        data: [300, 200, 300, 250, 100],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ DatalabelsPlugin ];

  constructor() { }
}
