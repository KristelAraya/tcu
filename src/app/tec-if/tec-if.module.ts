import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecIfPageRoutingModule } from './tec-if-routing.module';

import { TecIfPage } from './tec-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecIfPageRoutingModule
  ],
  declarations: [TecIfPage]
})
export class TecIfPageModule {}
