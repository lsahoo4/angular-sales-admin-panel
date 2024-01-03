import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AnnualSalesChartComponent } from '../charts/annual-sales-chart/annual-sales-chart.component';
import { ProductSalesChartComponent } from '../charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from '../charts/sales-traffic-chart/sales-traffic-chart.component';
import { StoreSessionsChartComponent } from '../charts/store-sessions-chart/store-sessions-chart.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';
import { TotalSaleComponent } from '../mini-card/total-sale/total-sale.component';
import { AverageValueComponent } from '../mini-card/average-value/average-value.component';
import { TotalOrderComponent } from '../mini-card/total-order/total-order.component';
import { ReturningCuctomerComponent } from '../mini-card/returning-cuctomer/returning-cuctomer.component';
import { OrdersTableComponent } from '../order/order-table/orders-table/orders-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    CardComponent,
    AnnualSalesChartComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    MiniCardComponent,
    TotalSaleComponent,
    AverageValueComponent,
    TotalOrderComponent,
    ReturningCuctomerComponent
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  miniCardData: any[] = [];
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  constructor() {
    this.miniCardData = [
      { title: 'Total Sales', textValue: 'since last month', value: '9465', color: '', percentValue: '+53.83%' },
      { title: 'Average Order Value', textValue: 'since last month', value: '465', color: '', percentValue: '-25.44%' },
      { title: 'Total Orders', textValue: 'since last month', value: '243', color: '', percentValue: '+45.65%' },
      { title: 'Returning Customers', textValue: 'since last month', value: '35', color: '', percentValue: '-83.61%' }];
  }
}
