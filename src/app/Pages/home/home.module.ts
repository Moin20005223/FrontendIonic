import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { GalleryComponent } from 'src/app/Components/gallery/gallery.component';
import { GalleryInRowComponent } from 'src/app/Components/gallery-in-row/gallery-in-row.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage,GalleryComponent,GalleryInRowComponent],
  exports:[HeaderComponent]
})
export class HomePageModule {}
