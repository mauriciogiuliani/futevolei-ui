import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, EMPTY, from, of } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }


  async ngOnInit(): Promise<void> {
    await this.loginService.isLoggedIn().then(result => {
      if(result) {
        this.router.navigate(["tournaments"])
      }
    })
  }

  loginFacebook() {
    this.loginService.facebookLogin();
  }

  login() {
    this.loginService.facebookLogin();
  }

  logout() {
    this.loginService.logout();
  }

  
  email() {
    this.loginService.email()
  }

  google() {
    this.loginService.google();
  }

}
