import { Action } from '@ngrx/store';

export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export class DisplayError implements Action {
  readonly type = DISPLAY_ERROR;

  constructor(public payload: string) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export type SharedStoreActions = DisplayError | ClearError;
