import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { Products } from '../../model/product';
import { VndFormatPipe } from '../../vnd-format.pipe';
import { DuLieuService } from '../../service/du-lieu.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule,VndFormatPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  cartItems:any = [];
  listsp: any;
  sp:any;
  product: any;
  quantity: number = 1;
  constructor(private h:HttpClient, private cartService:CartService,private d:DuLieuService,private router:Router){
    var url = "http://localhost:3000/product";
    this.h.get(url).subscribe(res=>{
      this.listsp = res;
      console.log(res);
      
    })
    this.cartItems = cartService.getItems()
    console.log(this.cartItems);
    
  }
  ngOnInit() {
      
    }

  addToCart(p:any) { 
  console.log(p);
  
    const isExisting = this.cartItems.find((item: any) => item.id === p.id);
    if (isExisting) {
      isExisting.quantity += this.quantity;
      this.cartService.saveNewCart(this.cartItems);
      this.cartItems = this.cartService.getItems();
      console.log(this.cartItems);
      // this.router.navigate(['/cart']);
      return;
    } else {
      const newItem = { ...p, quantity: this.quantity};
      this.cartService.addToCart(newItem);
      this.cartItems = this.cartService.getItems();
      console.log(this.cartItems);
      // this.router.navigate(['/cart']);
    }
      
    }
  

}
