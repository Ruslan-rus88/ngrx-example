import { Injectable } from '@angular/core';

import { catchError, debounceTime, switchMap } from 'rxjs';

import { CoinsListService } from '../../services/coins-list.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as coinsListActions from '../actions/coins-list.actions';

@Injectable()
export class CoinsListEffects {
  constructor(
    private actions$: Actions,
    private coinsListService: CoinsListService
  ) {}

  loadCoinsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(coinsListActions.LOAD_COINS),

      // ! debounce time is just for demonstration
      debounceTime(1000),

      // ! withLatestFrom is used to get some data from other selectors of the store to use them below
      // withLatestFrom()

      switchMap((action: coinsListActions.LoadCoins) => {
        // ! we can use action.payload if exists

        return this.coinsListService.getCoins().pipe(
          switchMap((resp) => {
            console.log(resp);

            const currenciesArray = this.coinsListService.getCurrenciesArray(
              resp.bpi
            );
            return [
              new coinsListActions.CoinsLoaded({
                currenciesArray: currenciesArray,
                lastUpdate: resp.time.updated,
              }),
            ];
          })
        );
      }),
      catchError((e) => {
        throw 'Something went wrong!!!!!!!!!!!!!!!!!';
      })
    );
  });
}
