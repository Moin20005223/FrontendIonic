import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: { price: string, img: string }[];

  deleteImg="../../../assets/deletebutton.png";
  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getLocally();
    console.log(this.cartItems);
  }
  deleteItemFromCart()
  {
    
  }
}
