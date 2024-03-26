import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: { price: string, img: string }[] = [];

  addToCart(item: { price: string, img: string }) {
    this.cart.push(item);
  }

  getCart(): { price: string, img: string }[] {
    return this.getLocally();
  }

  storeLocally(price: string, img: string )
  {
    const cartItem = { price: price, img: img };
    const cart = localStorage.getItem("cart");
    if (cart) {
      const existingCart = JSON.parse(cart);
      existingCart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([cartItem]));
    }
  }
  getLocally()
  {
    console.log(localStorage.getItem("cart"))
   return JSON.parse(localStorage.getItem("cart"));
  }
  constructor() { }
}
