import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SharedStoreState } from '../reducers/shared-store.reducers';

export const getSharedStoreState =
  createFeatureSelector<SharedStoreState>('sharedStore');

export const getSharedError = createSelector(
  getSharedStoreState,
  (state) => state.error
);
