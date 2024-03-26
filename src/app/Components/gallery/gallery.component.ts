import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  implements OnInit {

  img1="../../../assets/1.webp";
  img2="../../../assets/2.png";
  img3="../../../assets/3.png";
  img4="../../../assets/4.webp";
  img5="../../../assets/5.webp";
  img6="../../../assets/6.png";

  constructor() { }
  
  ngOnInit() {}
}
