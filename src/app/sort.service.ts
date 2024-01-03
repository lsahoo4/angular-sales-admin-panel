import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  data: any[] = [];
  currentSort: { column: string; direction: string } = { column: '', direction: 'asc' };

  private sortSubject = new BehaviorSubject<{ column: string; direction: string }>({
    column: '',
    direction: 'asc', // Default sorting direction is ascending
  });

  getSort(): Observable<{ column: string; direction: string }> {
    return this.sortSubject.asObservable();
  }

  setSort(column: string): void {
    const currentSort = this.sortSubject.getValue();
    if (currentSort.column === column) {
      // If clicking on the same column, toggle the sorting direction
      const newDirection = currentSort.direction === 'asc' ? 'desc' : 'asc';
      this.sortSubject.next({ column, direction: newDirection });
    } else {
      // If clicking on a new column, set the sorting direction to ascending
      this.sortSubject.next({ column, direction: 'asc' });
    }
  }

  sortData(data: any[]): any[] {
    this.currentSort = this.sortSubject.getValue();
    data.sort((a, b) => {
      const valueA = a[this.currentSort.column];
      const valueB = b[this.currentSort.column];

      // Handle different data types (e.g., numbers, strings, dates)
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.compareStrings(valueA, valueB);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.compareNumbers(valueA, valueB);
      } else if (valueA instanceof Date && valueB instanceof Date) {
        return this.compareDates(valueA, valueB);
      }

      return 0; // Default case: no sorting
    });

    if (this.currentSort.direction === 'desc') {
      data.reverse();
    }
    return data;
  }

  compareStrings(a: string, b: string): number {
    return a.localeCompare(b);
  }

  compareNumbers(a: number, b: number): number {
    return a - b;
  }

  compareDates(a: Date, b: Date): number {
    return a.getTime() - b.getTime();
  }

  constructor() { }
  
}
