import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlasticoIfPage } from './plastico-if.page';

const routes: Routes = [
  {
    path: '',
    component: PlasticoIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlasticoIfPageRoutingModule {}
