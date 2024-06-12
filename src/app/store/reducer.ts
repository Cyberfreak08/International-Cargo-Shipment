import { createReducer, on, Action } from '@ngrx/store';
import * as DataActions from './action';
import { AppState } from './app.state';

export const initialState: AppState = {
  customers: [],
  transactions: [],
  categories: [],
  loading: false,
  error: null,
  customersByCategoryInQ2: [],
};

const _dataReducer = createReducer(
  initialState,
  on(DataActions.loadData, (state) => ({ ...state, loading: true })),
  on(
    DataActions.loadDataSuccess,
    (state, { customers, transactions, categories }) => ({
      ...state,
      customers,
      transactions,
      categories,
      loading: false,
      error: null,
    })
  ),
  on(DataActions.loadDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(DataActions.loadCustomersByCategoryInQ2, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DataActions.loadCustomersByCategoryInQ2Success, (state, { data }) => ({
    ...state,
    customersByCategoryInQ2: data,
    loading: false,
  })),
  on(DataActions.loadCustomersByCategoryInQ2Failure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function dataReducer(state: AppState | undefined, action: Action) {
  return _dataReducer(state, action);
}
