import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';
import { ProductComponent } from './component/product/product.component';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SpLoaiComponent } from './component/sp-loai/sp-loai.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ThanhtoanComponent } from './component/thanhtoan/thanhtoan.component';
import { TimkiemComponent } from './component/timkiem/timkiem.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminLoaiComponent } from './component/admin/admin-loai/admin-loai.component';
import { SidebarComponent } from './component/admin/sidebar/sidebar.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { adminGuardGuard } from './service/admin-guard.guard';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { CateComponent } from './component/cate/cate.component';
import { AddCateComponent } from './component/admin/add-cate/add-cate.component';
import { AuthService } from './service/auth.service';

import { SignUpComponent } from './component/sign-up/sign-up.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'products',component: ProductComponent},
    {path:'product/:id',component: ProductdetailsComponent},
    {path:'loai/:id',component:SpLoaiComponent},
    {path:'cart',component:CartComponent},
    {path:'thanhtoan',component:ThanhtoanComponent},
    {path:'timkiem',component:TimkiemComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'admin',canActivate:[adminGuardGuard],component:AdminComponent,children:[
        {path:'sanpham',component:SidebarComponent},
        {path:'loai',component:AdminLoaiComponent},
        {path:'add-product',component:AddProductComponent},
        {path:'add-cate',component:AddCateComponent},
        {path:'edit-product/:id',component:EditProductComponent}
    ]},
];
@NgModule({
    imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
