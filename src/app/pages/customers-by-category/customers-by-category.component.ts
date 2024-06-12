import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DataActions from '../../store/action';
import { selectCustomersByCategoryInQ2, selectLoading, selectError } from '../../store/selectors';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-customers-by-category',
  templateUrl: './customers-by-category.component.html',
  styleUrls: ['./customers-by-category.component.css'],
})
export class CustomersByCategoryComponent implements OnInit {
  data$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private location: Location) {
    this.data$ = this.store.pipe(select(selectCustomersByCategoryInQ2));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  ngOnInit(): void {
    console.log('Component: Dispatching loadCustomersByCategoryInQ2');
    this.store.dispatch(DataActions.loadCustomersByCategoryInQ2());
    this.data$.subscribe(data => {
      console.log('Component: Data from store', data);
    });
    this.loading$.subscribe(loading => {
      console.log('Component: Loading state', loading);
    });
    this.error$.subscribe(error => {
      console.log('Component: Error state', error);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
