import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

import Annotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.css'],
  standalone: true,
  imports: [ NgChartsModule ]
})
export class AnnualSalesChartComponent {

  constructor() {
    Chart.register(Annotation);
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 3500, 2000, 4000, 5000, 4005, 5550, 6000 ]
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
}
