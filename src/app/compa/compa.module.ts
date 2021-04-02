import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompaPageRoutingModule } from './compa-routing.module';

import { CompaPage } from './compa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompaPageRoutingModule
  ],
  declarations: [CompaPage]
})
export class CompaPageModule {}
