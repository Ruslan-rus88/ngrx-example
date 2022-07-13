import * as coinsListActions from '../actions/coins-list.actions';

export interface currency {
  code: string;
  rate: string;
}

export interface CoinsListState {
  loading: boolean;
  loaded: boolean;
  lastUpdate: string;
  currencies: currency[];
}

export const initialState: CoinsListState = {
  loading: false,
  loaded: false,
  lastUpdate: '',
  currencies: [],
};

export function coinsListReducer(
  state: CoinsListState = initialState,
  action: coinsListActions.CoinsListActions
): CoinsListState {
  switch (action.type) {
    case coinsListActions.LOAD_COINS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case coinsListActions.COINS_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
        currencies: action.payload.currenciesArray,
        lastUpdate: action.payload.lastUpdate,
      };
    case coinsListActions.CLEAR_COINS_LIST:
      return initialState;
    case coinsListActions.LOADING_STOPPED:
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
}
