import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [PlaygroundRoutingModule.components],
  imports: [CommonModule, PlaygroundRoutingModule, SharedModule],
})
export class PlaygroundModule {}
