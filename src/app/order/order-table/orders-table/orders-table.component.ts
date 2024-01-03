import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { EXAMPLE_ORDER_DATA, OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<OrdersTableItem>;
  dataSource = new MatTableDataSource<OrdersTableItem>(EXAMPLE_ORDER_DATA);

  isTableHasData: boolean = false;
  @Input() showAddButton: boolean = true;
  @Input() isAdmin: boolean = false;
  serchText: any;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    "orderId",
    "date",
    "user",
    "status",
    "orderTotal",
    "paymentMode",
    "actions"
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(private router: Router ) {}

  ngOnInit(): void {
    if(this.dataSource.data.length > 0)
      this.isTableHasData = true;
  }

  addNew() {
    this.router.navigateByUrl('/orders/new');
  }

  /**
   * 
   * @param filterValue 
   */
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    if(this.dataSource.data.length > 0){
      this.isTableHasData = true;
    } else {
      this.isTableHasData = false;
    }
  }
}
