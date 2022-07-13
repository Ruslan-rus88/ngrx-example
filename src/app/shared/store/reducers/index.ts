import * as fromCoinsList from 'src/app/pages/coins/shared/store/reducers/coins-list.reducers';

import { ActionReducerMap } from '@ngrx/store';

// ! here we add all states that we have in different components
export interface AppState {
  coinsList: fromCoinsList.CoinsListState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  coinsList: fromCoinsList.coinsListReducer,
};
