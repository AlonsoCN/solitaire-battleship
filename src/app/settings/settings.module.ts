import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsRoutingModule.components],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
