import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Data] Load Data');

export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ customers: any[], transactions: any[], categories: any[] }>()
);

export const loadDataFailure = createAction(
  '[Data] Load Data Failure',
  props<{ error: string }>()
);


export const loadCustomersByCategoryInQ2 = createAction('[Data] Load Customers By Category In Q2');

export const loadCustomersByCategoryInQ2Success = createAction(
  '[Data] Load Customers By Category In Q2 Success',
  props<{ data: any[] }>()
);

export const loadCustomersByCategoryInQ2Failure = createAction(
  '[Data] Load Customers By Category In Q2 Failure',
  props<{ error: string }>()
);