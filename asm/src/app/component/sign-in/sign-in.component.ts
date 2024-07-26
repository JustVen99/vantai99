import { Component } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private authService: AuthService) { }
  onLogin(formData: any) {
    try {
      this.authService.login(formData.email, formData.password)
    }catch(error) {
      console.log(error);
    }
  }
  ngOnInit(): void { 
    console.log('login '+this.authService.isLoggedIn());
  }
}
