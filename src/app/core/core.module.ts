import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StoreStateService } from './store/store-state.service';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [StoreStateService],
})
export class CoreModule {}
