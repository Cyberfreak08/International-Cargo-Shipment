import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectDataState = createFeatureSelector<AppState>('data');

export const selectAllCustomers = createSelector(
  selectDataState,
  (state: AppState) => state.customers
);

export const selectLoading = createSelector(
  selectDataState,
  (state: AppState) => state.loading
);

export const selectError = createSelector(
  selectDataState,
  (state: AppState) => state.error
);

export const selectCustomersByCategoryInQ2 = createSelector(
  selectDataState,
  (state: AppState) => state.customersByCategoryInQ2
);
