import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { Products } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() {
    // Lấy giỏ hàng từ localStorage khi service được khởi tạo
    this.loadCart();
  }

  getItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  saveNewCart(cartItems: any)  {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }


  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }
}
