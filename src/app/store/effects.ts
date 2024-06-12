import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '../data.service';
import * as DataActions from './action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadData),
      mergeMap(() => {
        console.log('Effect: loadData action dispatched');
        return this.dataService.loadData().pipe(
          map((data) => {
            console.log('Effect: Data fetched successfully', data);
            return DataActions.loadDataSuccess({
              customers: data.customers,
              transactions: data.transactions,
              categories: data.categories,
            });
          }),
          catchError((error) => {
            console.error('Effect: Error fetching data', error);
            return of(DataActions.loadDataFailure({ error: error.message }));
          })
        );
      })
    )
  );

  loadCustomersByCategoryInQ2$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadCustomersByCategoryInQ2),
      mergeMap(() =>
        this.dataService.loadData().pipe(
          map((data) => {
            console.log('Effect: Fetching customers by category in Q2');
            const result = this.dataService.getCustomersByCategoryInQ2(data);
            console.log(
              'Effect: Customers by category in Q2 fetched successfully',
              result
            );
            return DataActions.loadCustomersByCategoryInQ2Success({
              data: result,
            });
          }),
          catchError((error) => {
            console.error(
              'Effect: Error fetching customers by category in Q2',
              error
            );
            return of(
              DataActions.loadCustomersByCategoryInQ2Failure({
                error: error.message,
              })
            );
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
