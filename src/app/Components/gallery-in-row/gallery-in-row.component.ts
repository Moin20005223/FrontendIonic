import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-in-row',
  templateUrl: './gallery-in-row.component.html',
  styleUrls: ['./gallery-in-row.component.scss'],
})
export class GalleryInRowComponent  implements OnInit {
  
  // @Input() img1:string;img2:string;img3:string;img4:string;


  img1="../../../assets/gallery1.jpg";
  img2="../../../assets/gallery2.jpg";
  img3="../../../assets/gallery3.jpg";
  img4="../../../assets/gallery4.jpg";

  constructor() { }

  ngOnInit() {}
  
}
