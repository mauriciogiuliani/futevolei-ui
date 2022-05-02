import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { getCookie } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  async canActivate(): Promise<boolean> {
    if (getCookie("user")) {
      return true
    } else {
      return await this.loginService.isLoggedIn().then(
        result => {
          if (!result) {
            this.router.navigate([""]);
            return false;
          } else {
            return true;
          }
        }
      );
    }

  }
}
