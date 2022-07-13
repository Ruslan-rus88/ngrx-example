import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { currency } from '../store/reducers/coins-list.reducers';

@Injectable()
export class CoinsListService {
  url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private httpClient: HttpClient) {}

  public getCoins(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getCurrenciesArray(currencies: any): currency[] {
    const keys = Object.keys(currencies);
    const currenciesArray = keys.map((key) => {
      return {
        code: currencies[key]['code'],
        rate: currencies[key]['rate'],
      };
    });
    return currenciesArray;
  }
}
