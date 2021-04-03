import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TetraIfPage } from './tetra-if.page';

const routes: Routes = [
  {
    path: '',
    component: TetraIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TetraIfPageRoutingModule {}
