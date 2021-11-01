import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [HistoryRoutingModule.components],
  imports: [CommonModule, HistoryRoutingModule],
})
export class HistoryModule {}
