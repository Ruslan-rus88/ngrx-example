import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoinsListService } from './shared/services/coins-list.service';

import { CoinsListComponent } from './coins-list/coins-list.component';

@NgModule({
  declarations: [CoinsListComponent],
  providers: [CoinsListService],
  imports: [CommonModule, HttpClientModule],
  exports: [CoinsListComponent],
})
export class CoinsModule {}
