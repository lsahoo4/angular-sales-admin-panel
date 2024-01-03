import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';

// TODO: Replace this with your own data model type
export interface OrdersTableItem {
  id: number;
  orderId: string;
  date: string;
  user: string;
  status: string;
  orderTotal: string;
  paymentMode: string;
}

// TODO: replace this with real data from your application
export const EXAMPLE_ORDER_DATA: OrdersTableItem[] = [
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '500', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '230', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '230', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '230', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '230', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
  {id: 1, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'shipped', orderTotal: '230', paymentMode: 'paypal' },
  {id: 2, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'delivered', orderTotal: '230', paymentMode: 'paypal' },
  {id: 3, orderId: 'order1',date: '01/01/2023', user: 'Abc Abc', status: 'pending', orderTotal: '230', paymentMode: 'paypal' },
];

/**
 * Data source for the OrdersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrdersTableDataSource extends DataSource<OrdersTableItem> {
  private _data = new BehaviorSubject<OrdersTableItem[]>(EXAMPLE_ORDER_DATA);
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  filter: string | undefined

  get data(): OrdersTableItem[] {
    return this._data.value;
  }

  set data(data: OrdersTableItem[]) {
    this._data.next(data);
  }

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OrdersTableItem[]> {
    const displayDataChanges = [
      this._data,
      this.paginator ? this.paginator.page : [],
      this.sort ? this.sort.sortChange : [],
    ];

    return merge(...displayDataChanges).pipe(
      map(() => {
        const filteredData = this.getFilteredData([...this._data.value]);
        const sortedData = this.getSortedData(filteredData);
        return this.getPagedData(sortedData);
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  private getFilteredData(data: OrdersTableItem[]): OrdersTableItem[] {
    if (!this.filter) {
      return data;
    }

    const filterValue = this.filter.trim().toLowerCase();
    return data.filter((item) => {
      // Adjust this logic based on your specific filtering criteria
      return JSON.stringify(item).toLowerCase().includes(filterValue);
    });
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OrdersTableItem[]): OrdersTableItem[] {
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
  private getSortedData(data: OrdersTableItem[]): OrdersTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

 
    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'orderId': return compare(a.orderId, b.orderId, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'user': return compare(a.user, b.user, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'orderTotal': return compare(a.orderTotal, b.orderTotal, isAsc);
        case 'paymentMode': return compare(a.paymentMode, b.paymentMode, isAsc);
        default: return 0;
      }
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    const filterFunction = (data: any, filter: string): boolean => {
      // Implement your custom filtering logic here
      // Example: Case-insensitive partial match on 'name' property
      return data.name.toLowerCase().includes(filter.toLowerCase());
    };

    return filterFunction;
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


