import { Action } from '@ngrx/store';

import { currency } from '../reducers/coins-list.reducers';

export const LOAD_COINS = 'LOAD_COINS';
export const COINS_LOADED = 'COINS_LOADED';
export const CLEAR_COINS_LIST = 'CLEAR_COINS_LIST';
export const LOADING_STOPPED = 'LOADING_STOPPED';

export class LoadCoins implements Action {
  readonly type = LOAD_COINS;
}

export class CoinsLoaded implements Action {
  readonly type = COINS_LOADED;

  constructor(
    public payload: {
      currenciesArray: currency[];
      lastUpdate: string;
    }
  ) {}
}

export class ClearCoinsList implements Action {
  readonly type = CLEAR_COINS_LIST;
}

export class LoadingStopped implements Action {
  readonly type = LOADING_STOPPED;
}

export type CoinsListActions =
  | LoadCoins
  | CoinsLoaded
  | ClearCoinsList
  | LoadingStopped;
