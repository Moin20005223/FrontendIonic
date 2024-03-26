import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { GalleryInRowComponent } from '../Components/gallery-in-row/gallery-in-row.component';
import { GalleryComponent } from '../Components/gallery/gallery.component';


@NgModule({
  declarations: [HeaderComponent,GalleryInRowComponent,GalleryComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeaderComponent,GalleryInRowComponent,GalleryComponent]
})
export class SharedModule { }
