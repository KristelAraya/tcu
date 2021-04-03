import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoReciPageRoutingModule } from './no-reci-routing.module';

import { NoReciPage } from './no-reci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoReciPageRoutingModule
  ],
  declarations: [NoReciPage]
})
export class NoReciPageModule {}
