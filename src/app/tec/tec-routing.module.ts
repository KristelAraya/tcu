import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecPage } from './tec.page';

const routes: Routes = [
  {
    path: '',
    component: TecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecPageRoutingModule {}
