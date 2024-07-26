import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { VndFormatPipe } from '../../vnd-format.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,VndFormatPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:any = [];
  totalCart = 0;
 constructor(private cartService: CartService,private router:Router) {
  this.cart = cartService.getItems();
 }
 ngOnInit() { 
  this.cartCalculation();
}
removeItem(i:any) { 
  this.cart.splice(i, 1);
  this.cartCalculation();
  this.cartService.saveNewCart(this.cart);
  this.router.navigate(['/cart']);
}
cartCalculation() {
  this.totalCart = 0;
  this.cart.forEach((item:any) => {
    this.totalCart += item.price * item.quantity;
  });
  this.totalCart.toFixed(2);
}

clearCart() {
  this.cart = [];
  this.cartService.saveNewCart(this.cart);
  this.totalCart = 0;
}
increase(i: any) {
  this.cart[i].quantity++;
  this.cartCalculation();
  this.cartService.saveNewCart(this.cart);
}
decrease(i: any) {
  if (this.cart[i].quantity > 0) { 
    this.cart[i].quantity--;
    this.cartCalculation();
    this.cartService.saveNewCart(this.cart);
  }
}
}
