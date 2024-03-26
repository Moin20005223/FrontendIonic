import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.scss'],
})
export class KidsPage implements OnInit {

  img1="../../../assets/kid1.jpg";
  img2="../../../assets/kid2.jpg";
  img3="../../../assets/kid3.jpg";
  img4="../../../assets/kid4.webp";
  img5="../../../assets/kid5.jpg";
  img6="../../../assets/kid6.jpg";
  constructor() { }

  ngOnInit() {
  }

}
