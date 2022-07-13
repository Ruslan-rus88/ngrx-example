import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoinsModule } from './pages/coins/coins.module';
import * as _effects from './shared/store/effects/index';
import { reducers } from './shared/store/reducers/index';

const effects = Object.values(_effects);
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoinsModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
