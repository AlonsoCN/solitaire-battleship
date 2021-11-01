import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/playground' },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then((m) => m.PlaygroundModule),
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
