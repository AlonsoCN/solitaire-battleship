import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsRoutingModule.components],
  imports: [CommonModule, SettingsRoutingModule, FormsModule],
})
export class SettingsModule {}
