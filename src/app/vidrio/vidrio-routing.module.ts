import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidrioPage } from './vidrio.page';

const routes: Routes = [
  {
    path: '',
    component: VidrioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidrioPageRoutingModule {}
