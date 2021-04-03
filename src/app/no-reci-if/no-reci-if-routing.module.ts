import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoReciIfPage } from './no-reci-if.page';

const routes: Routes = [
  {
    path: '',
    component: NoReciIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoReciIfPageRoutingModule {}
