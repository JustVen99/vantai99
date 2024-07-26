import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, elementAt } from 'rxjs';
import {  ChangeDetectorRef } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string = "";
  private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) { }
  private isAuthenticated = false;
  // Khởi tạo BehaviorSubject với giá trị khởi đầu là null
  private userSubject = new BehaviorSubject<any>(null);
  // Để component khác có thể đăng ký và lắng nghe sự thay đổi
  user$ = this.userSubject.asObservable();
  setToken(token:any) {
    this.token = token;
  }
  getToken() { 
    return this.token
  }

  login(email: string, password: string) {
    const user={
      'email':email,
      'password':password
    }   
    console.log(user);
    
    // Gửi yêu cầu đăng nhập đến API
    this.http.post('http://localhost:8000/auth/login', user).subscribe(
      (response: any) => {
        // Nhận JWT token từ phản hồi và lưu vào localStorage
        const token = response.access_token;
        localStorage.setItem('access_token', token); 
        // Có dữ liệu mới thông báo cho header thay đổi
        this.userSubject.next(this.getUserInfo());
        // Đánh dấu đã chứng thực thành công
        this.isAuthenticated = true;
        console.log(this.isAdmin());

        if (this.isAdmin()) { 
          console.log(this.getUserInfo().kind);
          
          this.router.navigate(['/admin/sanpham']);
        } else {
          this.router.navigate(['']);
        }
        // Tiếp tục xử lý sau khi chứng thực thành công, ví dụ: chuyển hướng đến trang product
      }      
      , error => {
        alert(error.error.message)
    });  
  }
  signup(email: string, password: string) { 
    const user={
      'email':email,
      'password':password
    }   
    // Gửi yêu cầu đăng nhập đến API
    this.http.post('http://localhost:8000/auth/register', user).subscribe(
      (response: any) => {
        // Nhận JWT token từ phản hồi và lưu vào localStorage
        const token = response.access_token;
        localStorage.setItem('access_token', token); 
        // Có dữ liệu mới thông báo cho header thay đổi
        this.userSubject.next(this.getUserInfo());
        // Đánh dấu đã chứng thực thành công
        this.isAuthenticated = true;
        // Tiếp tục xử lý sau khi chứng thực thành công, ví dụ: chuyển hướng đến trang product
        this.router.navigate(['']);
      }, error => {
        alert(error.error.message)
      }     
    );
  }

  logout(){   
      // Xóa token khỏi localStorage
      localStorage.removeItem('access_token'); 
       // Có dữ liệu mới thông báo cho header thay đổi    
      this.userSubject.next(null);
      // Đánh dấu đã đăng xuất
      this.isAuthenticated = false;      
      // Tiếp tục xử lý sau khi đăng xuất, ví dụ: chuyển hướng đến trang đăng nhập
      alert('Bạn đã đăng xuất');
      this.router.navigate(['']);    
  }


  getUserInfo():any{
    let result:any=null
    try {
      let token: any = localStorage.getItem('access_token');
      const decodedToken = this.jwtHelper.decodeToken(token);     
      // Trả về thông tin người dùng từ token
      result=decodedToken
    } catch (error) {
      console.error('Error decoding token:', error);      
    }
    return result
  }
  
  isAdmin() { 
    try {
      let token: any = localStorage.getItem('access_token');
      const decodedToken = this.jwtHelper.decodeToken(token);     
      console.log(decodedToken);
      
      // Trả về thông tin người dùng từ token
      if (decodedToken.inforUser.kind == 1) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error decoding token:', error);      
    }
    return false; 
  }


  isLoggedIn(): boolean {       
        const token = localStorage.getItem('access_token');
        let result:boolean=false
        try{
           // Kiểm tra token có tồn tại, hợp lệ và chưa hết hạn
          result=!!token && !this.jwtHelper.isTokenExpired(token);
        }catch{}
        return result
  }
}


