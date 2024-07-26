import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { RouterLink } from '@angular/router';
import { VndFormatPipe } from '../../vnd-format.pipe';
import { Products } from '../../model/product';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-timkiem',
  standalone: true,
  imports: [RouterLink,VndFormatPipe,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './timkiem.component.html',
  styleUrl: './timkiem.component.css'
})
export class TimkiemComponent {
  products : any
  listsp: any;
  sp:any;
  listparams: any;
  constructor(private h:HttpClient, private cartService:CartService,private route: ActivatedRoute){
  }
  
  ngOnInit() {
    var url = "http://localhost:3000/product";
    this.h.get(url).subscribe(res => {
      this.products = res;
      this.listsp = this.products;
      console.log(this.listsp);
      this.route.queryParamMap.subscribe((params) => {
        this.listparams = params.get("keyword");
        console.log(this.listparams);
        this.listsp = this.products.filter((list: any) => list.name.toLowerCase().includes(this.listparams));
        console.log(this.listsp);
      });
    });
  }
  addtoCart(product:Products){
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
}
