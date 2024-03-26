import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  implements OnInit {

  @Input() img1:String;
  @Input() img2:String;
  @Input() img3:String;
  @Input() img4:String;
  @Input() img5:String;
  @Input() img6:String;

  // img1="../../../assets/1.webp";
  // img2="../../../assets/2.png";
  // img3="../../../assets/3.png";
  // img4="../../../assets/4.webp";

  constructor() { }
  
  ngOnInit() {}
}
