import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.page.html',
  styleUrls: ['./accessory.page.scss'],
})
export class AccessoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  img1="../../../assets/acc1.webp";
  img2="../../../assets/acc2.jpg";
  img3="../../../assets/acc3.webp";
  img4="../../../assets/acc4.webp";
  img5="../../../assets/acc5.jpg";
  img6="../../../assets/acc6.jpg";
  
  price1="$2.21";
  price2="$2.00";
  price3="$3.45";
  price4="$4.50";
  price5="$5.00";
  price6="$1.60";
}
