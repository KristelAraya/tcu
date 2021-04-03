import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoReciPage } from './no-reci.page';

const routes: Routes = [
  {
    path: '',
    component: NoReciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoReciPageRoutingModule {}
