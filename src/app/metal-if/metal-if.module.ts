import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetalIfPageRoutingModule } from './metal-if-routing.module';

import { MetalIfPage } from './metal-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetalIfPageRoutingModule
  ],
  declarations: [MetalIfPage]
})
export class MetalIfPageModule {}
