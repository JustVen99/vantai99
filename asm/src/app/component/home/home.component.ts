import { Component } from '@angular/core';
import { CateComponent } from '../cate/cate.component';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CateComponent,ProductComponent,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
