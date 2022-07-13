import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { getSharedError } from './shared/store/selectors/shared-store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public error = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    const errorSubscription = this.store
      .select(getSharedError)
      .subscribe((err) => (this.error = err));
  }
}
