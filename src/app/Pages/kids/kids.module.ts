import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsPageRoutingModule } from './kids-routing.module';

import { KidsPage } from './kids.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsPageRoutingModule,
    SharedModule
  ],
  declarations: [KidsPage],
  exports:[SharedModule]
})
export class KidsPageModule {}
