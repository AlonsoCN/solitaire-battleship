import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { PlaygroundComponent } from './playground.component';
import { GameStateComponent } from './game-state/game-state.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {
  static components = [PlaygroundComponent, BoardComponent, GameStateComponent];
}
