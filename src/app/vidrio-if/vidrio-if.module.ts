import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidrioIfPageRoutingModule } from './vidrio-if-routing.module';

import { VidrioIfPage } from './vidrio-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidrioIfPageRoutingModule
  ],
  declarations: [VidrioIfPage]
})
export class VidrioIfPageModule {}
