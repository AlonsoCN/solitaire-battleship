import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [PlaygroundRoutingModule.components],
  imports: [CommonModule, PlaygroundRoutingModule],
})
export class PlaygroundModule {}
