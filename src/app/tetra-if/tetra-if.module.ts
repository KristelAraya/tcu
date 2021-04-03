import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TetraIfPageRoutingModule } from './tetra-if-routing.module';

import { TetraIfPage } from './tetra-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TetraIfPageRoutingModule
  ],
  declarations: [TetraIfPage]
})
export class TetraIfPageModule {}
