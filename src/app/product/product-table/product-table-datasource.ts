import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ProductTableItem {
  name: string;
  id: number;
  price: number;
  description: string;
}

// TODO: replace this with real data from your application
export const EXAMPLE_PRODUCT_DATA: ProductTableItem[] = [
  {id: 1, name: 'Hydrogen', price: 100, description: 'Hydrogen desc'},
  {id: 2, name: 'Helium',price: 100, description: 'Helium desc'},
  {id: 3, name: 'Lithium',price: 100, description: 'Lithium desc'},
  {id: 4, name: 'Beryllium',price: 100, description: 'Beryllium desc'},
  {id: 5, name: 'Boron',price: 100, description: 'Boron desc'},
  {id: 6, name: 'Carbon',price: 100, description: 'Carbon desc'},
  {id: 7, name: 'Nitrogen',price: 100, description: 'Nitrogen desc'},
  {id: 8, name: 'Oxygen',price: 100, description: 'Oxygen desc'},
  {id: 9, name: 'Fluorine',price: 100, description: 'Fluorine desc'},
  {id: 10, name: 'Neon',price: 100, description: 'Neon desc'},
  {id: 11, name: 'Sodium',price: 100, description: 'Sodium desc'},
  {id: 12, name: 'Magnesium',price: 100, description: 'Magnesium desc'},
  {id: 13, name: 'Aluminum',price: 100, description: 'Aluminum desc'},
  {id: 14, name: 'Silicon',price: 100, description: 'Silicon desc'},
  {id: 15, name: 'Phosphorus',price: 100, description: 'Phosphorus desc'},
  {id: 16, name: 'Sulfur',price: 200, description: 'Sulfur desc'},
  {id: 17, name: 'Chlorine',price: 100, description: 'Chlorine desc'},
  {id: 18, name: 'Argon',price: 100, description: 'Argon desc'},
  {id: 19, name: 'Potassium',price: 100, description: 'Potassium desc'},
  {id: 20, name: 'Calcium',price: 100, description: 'Calcium desc'},
];

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductTableDataSource extends DataSource<ProductTableItem> {
  data: ProductTableItem[] = EXAMPLE_PRODUCT_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  filter: string | undefined

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProductTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ProductTableItem[]): ProductTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProductTableItem[]): ProductTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
