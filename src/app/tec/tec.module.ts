import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecPageRoutingModule } from './tec-routing.module';

import { TecPage } from './tec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecPageRoutingModule
  ],
  declarations: [TecPage]
})
export class TecPageModule {}
