import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: { price: string, img: string }[];

  deleteImg="../../../assets/deletebutton.png";
  constructor(private cartService:CartServiceService,private router:Router) { }

  ngOnInit() {
    this.cartItems = this.cartService.getLocally();
    console.log(this.cartItems);
  }
  deleteItemFromCart(imgPath)
  {
     const localCart=JSON.parse(localStorage.getItem("cart"));
     let newCart=localCart.filter(item=>item.img!=imgPath);
     localStorage.setItem("cart",JSON.stringify(newCart));
     window.location.reload();
  }
}
