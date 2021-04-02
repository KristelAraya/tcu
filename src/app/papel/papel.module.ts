import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapelPageRoutingModule } from './papel-routing.module';

import { PapelPage } from './papel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapelPageRoutingModule
  ],
  declarations: [PapelPage]
})
export class PapelPageModule {}
