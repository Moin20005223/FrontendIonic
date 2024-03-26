import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessoryPageRoutingModule } from './accessory-routing.module';

import { AccessoryPage } from './accessory.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessoryPageRoutingModule,
    SharedModule
  ],
  declarations: [AccessoryPage],
  exports:[AccessoryPage]
})
export class AccessoryPageModule {}
