import { CanActivate,ActivatedRouteSnapshot,Router,RouterStateSnapshot,UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class adminGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate()
    {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) return true;
      alert("Bạn không có quyền truy cập vào trang này")
      this.router.navigate(['']);
      return false;
    }
};
