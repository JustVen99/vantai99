import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { DuLieuService } from '../../../service/du-lieu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-loai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-loai.component.html',
  styleUrl: './admin-loai.component.css'
})
export class AdminLoaiComponent {
  listloai: any;
  constructor(private h:HttpClient, private d:DuLieuService,private router:Router){
    var url = "http://localhost:3000/categories";
    this.h.get(url).subscribe(res=>{
      this.listloai = res;
    })
  }
  delete(id:any) {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
      this.d.deleteCate(id).subscribe((data: any) => {
        location.reload();
      });
    }
  }
}
