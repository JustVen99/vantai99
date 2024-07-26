import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { CateComponent } from './component/cate/cate.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { SpLoaiComponent } from './component/sp-loai/sp-loai.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { TimkiemComponent } from './component/timkiem/timkiem.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminLoaiComponent } from './component/admin/admin-loai/admin-loai.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminLoaiComponent,FooterComponent,AdminComponent,TimkiemComponent,FormsModule,SpLoaiComponent,CommonModule, RouterOutlet,HeaderComponent,MatIconModule,CateComponent,FooterComponent,HttpClientModule,ProductComponent,ProductdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asm';
}
