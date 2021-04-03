import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecIfPage } from './tec-if.page';

const routes: Routes = [
  {
    path: '',
    component: TecIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecIfPageRoutingModule {}
