import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TetraPageRoutingModule } from './tetra-routing.module';

import { TetraPage } from './tetra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TetraPageRoutingModule
  ],
  declarations: [TetraPage]
})
export class TetraPageModule {}
