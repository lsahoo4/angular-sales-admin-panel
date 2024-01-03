import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  standalone: true,
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css'],
  imports: [
    NgChartsModule
  ]
})
export class StoreSessionsChartComponent {

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false
  };
  
  public barChartLabels: any[] = ['Search', 'Direct', 'Social', 'Email', 'Unknown'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [ DataLabelsPlugin ];

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [400, 350, 250, 300, 100] }
    ],
  };

  constructor() {}
}
