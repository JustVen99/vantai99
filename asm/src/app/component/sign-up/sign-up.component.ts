import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private authService: AuthService) { 
  }
  onSubmit(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password);
  }
}
