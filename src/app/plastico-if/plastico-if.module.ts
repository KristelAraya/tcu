import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlasticoIfPageRoutingModule } from './plastico-if-routing.module';

import { PlasticoIfPage } from './plastico-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlasticoIfPageRoutingModule
  ],
  declarations: [PlasticoIfPage]
})
export class PlasticoIfPageModule {}
