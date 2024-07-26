import { Component,OnInit } from '@angular/core';
import { Products } from '../../model/product';
import { ActivatedRoute,Router } from '@angular/router';
import { DuLieuService } from '../../service/du-lieu.service';
import { CartService } from '../../service/cart.service';
import { VndFormatPipe } from '../../vnd-format.pipe';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [VndFormatPipe,HeaderComponent,FooterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product : any;
  constructor(private route:ActivatedRoute, private dulieu:DuLieuService,private router:Router,private cartService:CartService){
  }
  ngOnInit(): void {
      let productid = this.route.snapshot.params['id'];
      this.dulieu.getProductbyID(productid).subscribe((res)=>{
        this.product = res;
        console.log(this.product);
      })
  }
  addtoCart(product:Products){
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
}
