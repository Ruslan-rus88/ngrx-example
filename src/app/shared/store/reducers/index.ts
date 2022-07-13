import * as fromCoinsList from 'src/app/pages/coins/shared/store/reducers/coins-list.reducers';
import * as fromSharedStore from 'src/app/shared/store/reducers/shared-store.reducers';

import { ActionReducerMap } from '@ngrx/store';

// ! here we add all states that we have in different components
export interface AppState {
  coinsList: fromCoinsList.CoinsListState;
  sharedStore: fromSharedStore.SharedStoreState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  coinsList: fromCoinsList.coinsListReducer,
  sharedStore: fromSharedStore.sharedStoreReducer,
};
