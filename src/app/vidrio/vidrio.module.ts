import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidrioPageRoutingModule } from './vidrio-routing.module';

import { VidrioPage } from './vidrio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidrioPageRoutingModule
  ],
  declarations: [VidrioPage]
})
export class VidrioPageModule {}
