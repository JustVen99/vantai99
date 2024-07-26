import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,CommonModule,RouterModule,FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router,private auth:AuthService){}
  user :any = null;
  ngonInit(){
    this.auth.user$.subscribe((data) => { 
      this.user = this.auth.getUserInfo()
      console.log(this.user);
    }) 
    
  }
  keyword:string='';
  goProducts(){
    this.router.navigate(['/timkiem'],
    {queryParams:{keyword:this.keyword}})
  }
  logout() {
    this.auth.logout();
    this.user = null;
  }
}
