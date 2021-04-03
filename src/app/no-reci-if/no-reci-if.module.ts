import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoReciIfPageRoutingModule } from './no-reci-if-routing.module';

import { NoReciIfPage } from './no-reci-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoReciIfPageRoutingModule
  ],
  declarations: [NoReciIfPage]
})
export class NoReciIfPageModule {}
