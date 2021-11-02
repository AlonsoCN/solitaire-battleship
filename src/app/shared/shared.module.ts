import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileStatePipe } from './pipes/tile-state.pipe';
import { DifficultyModePipe } from './pipes/difficulty-mode.pipe';
import { ToasterNotificationComponent } from './components/toaster-notification/toaster-notification.component';

const components = [TileStatePipe, DifficultyModePipe, ToasterNotificationComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SharedModule {}
