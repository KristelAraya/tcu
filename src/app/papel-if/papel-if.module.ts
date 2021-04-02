import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapelIfPageRoutingModule } from './papel-if-routing.module';

import { PapelIfPage } from './papel-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapelIfPageRoutingModule
  ],
  declarations: [PapelIfPage]
})
export class PapelIfPageModule {}
