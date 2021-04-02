import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaPage } from './compa.page';

const routes: Routes = [
  {
    path: '',
    component: CompaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaPageRoutingModule {}
