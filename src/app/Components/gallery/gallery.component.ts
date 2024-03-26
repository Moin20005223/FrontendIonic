import { Component, OnInit,Input } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';
import { APIService } from 'src/app/api.service';

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

  @Input() price1:String;
  @Input() price2:String;
  @Input() price3:String;
  @Input() price4:String;
  @Input() price5:String;
  @Input() price6:String;

  
  login=localStorage.getItem("login")==="true"?true:false;
  // img1="../../../assets/1.webp";
  // img2="../../../assets/2.png";
  // img3="../../../assets/3.png";
  // img4="../../../assets/4.webp";

  constructor(private service:CartServiceService) { }
  
  ngOnInit() {}

  addToCart(price:any,img:any)
  {
    this.service.storeLocally(price,img);
    console.log(this.service.getCart());
    if(this.login)
    {
      alert("Item added to cart");
    }
    else
    {
      alert("Kindly login first!");
    }
  }
}
