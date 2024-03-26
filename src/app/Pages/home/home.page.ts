import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/Components/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  backPath="../../../assets/back.avif";
  constructor() {}

  img1="../../../assets/1.webp";
  img2="../../../assets/2.png";
  img3="../../../assets/3.png";
  img4="../../../assets/4.webp";
  img5="../../../assets/5.webp";
  img6="../../../assets/6.png";
}
