import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,RouterModule } from '@angular/router';
import { Products } from '../../model/product';
import { DuLieuService } from '../../service/du-lieu.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { VndFormatPipe } from '../../vnd-format.pipe';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-sp-loai',
  standalone: true,
  imports: [RouterModule,CommonModule,VndFormatPipe,HeaderComponent,FooterComponent],
  templateUrl: './sp-loai.component.html',
  styleUrl: './sp-loai.component.css'
})
export class SpLoaiComponent {
  product : any;
  listSP:any;
  constructor(private route:ActivatedRoute, private dulieu:DuLieuService,private router:Router,private cartService:CartService){
  }
  ngOnInit(): void {
      let productid = this.route.snapshot.params['id'];
      this.dulieu.getSanPhamTheoLoai(productid).subscribe((res)=>{
        this.listSP = res;
        console.log(this.listSP)
      })
  }
  addtoCart(product:Products){
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
}
