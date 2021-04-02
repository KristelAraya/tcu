import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetalIfPage } from './metal-if.page';

const routes: Routes = [
  {
    path: '',
    component: MetalIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetalIfPageRoutingModule {}
