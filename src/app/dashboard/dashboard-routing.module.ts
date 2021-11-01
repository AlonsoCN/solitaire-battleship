import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard.component';
import { GameStateComponent } from './game-state/game-state.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  static components = [DashboardComponent, BoardComponent, GameStateComponent];
}
