import { Component, Input, OnInit } from '@angular/core';

import * as sharedStoreActions from 'src/app/shared/store/actions/shared-store.actions';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shared-error',
  templateUrl: './shared-error.component.html',
  styleUrls: ['./shared-error.component.css'],
})
export class SharedErrorComponent implements OnInit {
  @Input() error = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public clearError(): void {
    this.store.dispatch(new sharedStoreActions.ClearError());
  }
}
