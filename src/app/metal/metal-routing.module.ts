import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetalPage } from './metal.page';

const routes: Routes = [
  {
    path: '',
    component: MetalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetalPageRoutingModule {}
