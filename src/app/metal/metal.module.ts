import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetalPageRoutingModule } from './metal-routing.module';

import { MetalPage } from './metal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetalPageRoutingModule
  ],
  declarations: [MetalPage]
})
export class MetalPageModule {}
