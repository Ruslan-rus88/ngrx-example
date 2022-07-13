import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';

import * as coinsListActions from '../shared/store/actions/coins-list.actions';
import {
  getCoinsListLoadingStatus,
  getCoinsRateAndDate
} from '../shared/store/selectors/coins-list.selectors';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css'],
})
export class CoinsListComponent implements OnInit, OnDestroy {
  public coinsList: any;
  public loaded: boolean = false;
  public loading: boolean = false;
  public currencies: any;
  public lastUpdate: string = '';

  private subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new coinsListActions.LoadCoins());
    this.subscriptions.push(
      this.subscribeToLoadingCoins(),
      this.subscribeToCurrencies()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private subscribeToLoadingCoins(): Subscription {
    return this.store.select(getCoinsListLoadingStatus).subscribe((data) => {
      console.log('getCoinsListLoadingStatus', data);

      this.loading = data.loading;
      this.loaded = data.loaded;
    });
  }

  private subscribeToCurrencies(): Subscription {
    return this.store.select(getCoinsRateAndDate).subscribe((data) => {
      console.log('getCoinsRateAndDate', data);

      this.currencies = data.currencies;
      this.lastUpdate = data.lastUpdate;
    });
  }

  public refresh(): void {
    this.store.dispatch(new coinsListActions.LoadCoins());
  }
}
