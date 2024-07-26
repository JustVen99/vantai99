import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { VndFormatPipe } from '../../../vnd-format.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuLieuService } from '../../../service/du-lieu.service';
import { Router,RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [VndFormatPipe,CommonModule,RouterModule,IndexComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  products:any = [];
  panigation=1;
  itemsPerPage=5;
  filteredProducts: any = ["/admin/sanpham"];
  constructor(private h:HttpClient, private d:DuLieuService,private router:Router,private auth:AuthService){
    var url = "http://localhost:3000/product";
    this.h.get(url).subscribe(res=>{
      this.products = res;
    })
  }
  ngOnInit() { 
    this.loadData();
  }
  loadData() {
    const startIndex = (this.panigation - 1) * this.itemsPerPage;
    this.d.getDatasFromTo(startIndex,this.itemsPerPage).subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }
  delete(id:any) {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      this.d.deleteProduct(id).subscribe((data: any) => {
        this.router.navigate(['/sanpham'])
      });
    }
  }
  editProduct(id:any){
    this.router.navigate(['/admin/edit-product',id])
  }
  logout(){
    this.auth.logout();
  }

  getPagination(data:number){
    this.panigation = data;
    this.loadData();
  }

}
