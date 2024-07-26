import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/product';
import { Observable,map } from 'rxjs';
import { Categories } from '../model/catories';


@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor(private h:HttpClient) { }
  getListLoaiSP(){
    var url = 'http://localhost/categories'
    return this.h.get<Categories[]>(url);
  }
  laySP(id:number=0){
    return this.h.get(`http://localhost:3000/product`);
  }
  getProductbyID(id:number):Observable<Products>{
    return this.h.get<Products>(`http://localhost:3000/product/${id}`);
  }
  getSanPhamTheoLoai(cat_id:number){
    var url = `localhost:3000/product?cat_id=${cat_id}`;
    return this.h.get<Products>(`http://localhost:3000/product?cat_id=${cat_id}`);
  }
  deleteProduct(id:number):Observable<any>{
    return this.h.delete(`http://localhost:3000/product/${id}`);
  }
  addCate(cateData:any){
    return this.h.post(`http://localhost:3000/categories`,cateData);
  }
  addProduct(product:any){
    return this.h.post(`http://localhost:3000/product`,product);
  }
  updateProduct(id:number,product:any):Observable<any>{
    return this.h.put<any>(`http://localhost:3000/product/${id}`,product);
  }
  deleteCate(id:number){
    return this.h.delete(`http://localhost:3000/categories/${id}`);
  }
  // getTenLoaiSanPham(cat_id:number){
  //   var url = `http://localhost:3000/categories?id=${cat_id}`
  //   return this.h.get<Products[]>(url);
  // }
  getDatasFromTo(from: number, pageSize: number) {
    return this.h.get<Products[]>(`http://localhost:3000/product`).pipe(
      map((items) => items.slice(from, from + pageSize))
    );
  }
}
