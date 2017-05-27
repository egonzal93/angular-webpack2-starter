/**
 * Created by pwc on 5/15/17.
 */

import { Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
// import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  // { path: 'lazy', loadChildren: './containers/lazy/index#LazyModule' },
  // { path: 'sync', loadChildren: './containers/sync/index#SyncModule?sync=true' },
  // { path: '**', component: NotFound404Component }
];
