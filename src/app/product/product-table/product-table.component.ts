import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { EXAMPLE_PRODUCT_DATA, ProductTableDataSource, ProductTableItem } from './product-table-datasource';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SortService } from '../../sort.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,
    MatIconModule, 
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatInputModule
  ]
})
export class ProductTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductTableItem>;
  dataSource = new MatTableDataSource<ProductTableItem>(EXAMPLE_PRODUCT_DATA);
  isTableHasData: boolean = false;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price','description'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(
    private router: Router,
    private sortService: SortService
    ) {
    if(this.dataSource.data.length > 0)
      this.isTableHasData = true;
  }

  ngOnInit(): void {
    this.dataSource.data = this.sortService.sortData(this.dataSource.data);
    this.sort.sortChange.subscribe((sort: Sort) => {
      // Handle the sorting change here
      console.log('Sort changed:', sort);
      this.sortService.currentSort = { column: sort.active, direction: sort.direction };
    });
  }

  addNew() {
    this.router.navigateByUrl('/products/new');
  }

  updateSort(column: string): void {
    this.sortService.setSort(column);
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    if(this.dataSource.data.length > 0){
      this.isTableHasData = true;
    } else {
      this.isTableHasData = false;
    }
  }
}
