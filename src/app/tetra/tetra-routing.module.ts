import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TetraPage } from './tetra.page';

const routes: Routes = [
  {
    path: '',
    component: TetraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TetraPageRoutingModule {}
