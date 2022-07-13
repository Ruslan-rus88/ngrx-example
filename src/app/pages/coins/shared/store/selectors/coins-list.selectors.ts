import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CoinsListState } from '../reducers/coins-list.reducers';

export const getCoinsListState =
  createFeatureSelector<CoinsListState>('coinsList');

export const getCoinsListLoadingStatus = createSelector(
  getCoinsListState,
  (state) => {
    return { loading: state.loading, loaded: state.loaded };
  }
);

export const getCoinsRateAndDate = createSelector(
  getCoinsListState,
  (state) => {
    return { currencies: state.currencies, lastUpdate: state.lastUpdate };
  }
);
