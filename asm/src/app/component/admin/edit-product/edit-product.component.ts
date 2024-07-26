import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DuLieuService } from '../../../service/du-lieu.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  id:any
  product:any={}
  constructor(private d:DuLieuService, private router: Router, private route:ActivatedRoute,private auth:AuthService){
}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.d.getProductbyID(this.id).subscribe(data=>{        
      this.product=data
      console.log(data);
      
    })
  }
  onSubmit(editForm:any){
    if(editForm.valid){
        this.d.updateProduct(this.id,this.product)
        .subscribe(
        ()=>this.router.navigate(['/admin/sanpham'])
      )
    }
  }
  logout(){
    this.auth.logout();
  }
}
