import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CustomerTableDataSource, CustomerTableItem } from './customer-table-datasource';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  standalone: true,
  imports: [
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatCardModule, 
    MatIconModule, 
    CommonModule, 
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatInputModule
  ]
})
export class CustomerTableComponent implements  OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CustomerTableItem>;
  dataSource = new CustomerTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'email', 'phone', 'city', 'state', 'pincode'];
  isTableHasData = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    if(this.dataSource.data.length > 0)
      this.isTableHasData = true;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addNew() {
    this.router.navigateByUrl('/customers/new');
  }

    applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.data.length > 0){
      this.isTableHasData = true;
    } else {
      this.isTableHasData = false;
    }
  }
}
