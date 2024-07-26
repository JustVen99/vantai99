import { Component } from '@angular/core';
import { Categories } from '../../model/catories';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cate.component.html',
  styleUrl: './cate.component.css'
})
export class CateComponent {
  listloai: any;
  constructor(private h:HttpClient){
    var url = "http://localhost:3000/categories";
    this.h.get(url).subscribe(res=>{
      this.listloai = res;
    })
  }
}
