import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecandPagePage } from './secand-page.page';

const routes: Routes = [
  {
    path: 'secand-page',
    component: SecandPagePage,
    loadChildren: () => import('./secand-page.module').then(m => m.SecandPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecandPagePageRoutingModule {}
