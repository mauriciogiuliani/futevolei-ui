import { Component, OnInit } from '@angular/core';
import { concatMap, EMPTY, from, of } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    this.loginService.isLoggedIn()
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
