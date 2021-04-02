import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapelPage } from './papel.page';

const routes: Routes = [
  {
    path: '',
    component: PapelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapelPageRoutingModule {}
