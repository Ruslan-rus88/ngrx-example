import * as sharedStoreActions from '../actions/shared-store.actions';

export interface SharedStoreState {
  error: string;
}

export const initialState: SharedStoreState = {
  error: '',
};

export function sharedStoreReducer(
  state: SharedStoreState = initialState,
  action: sharedStoreActions.SharedStoreActions
) {
  switch (action.type) {
    case sharedStoreActions.DISPLAY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case sharedStoreActions.CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}
