import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getCookie, setCookie } from '../_helpers/cookie.service';
import { LoginService } from './login.service';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }


  async ngOnInit() {
    await google.accounts.id.initialize({
      client_id: "714491587198-mg6o6k2hfh94o4smdl50amspgj52qrm4.apps.googleusercontent.com",
      callback: this.teste
    });

    // google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { theme: "outline", size: "large" }  // customization attributes
    // );

    // console.log("prompt")
    // google.accounts.id.prompt(); // also display the One Tap dialog

    if (getCookie("user")) {
      this.router.navigate(["tournaments"])
    } else {
      await this.loginService.isLoggedIn().then(result => {
        if (result) {
          this.router.navigate(["tournaments"])
        }
      })
    }

  }

  glogin() {
   
    google.accounts.id.prompt(); // also display the One Tap dialog

  }

  teste(response: any) {
    console.log("AAA")
    console.log(response);
    
    const decodedResponse: any = JSON.parse(atob(response.credential.split(".")[1]));

    console.log(decodedResponse);
    console.log(decodedResponse.email);

    const cookie = {
      name: response.name,
      email: response.email
    }

    setCookie("user", JSON.stringify(cookie));
    this.router.navigate(["tournaments"])

  }

  goTournaments() {
    this.router.navigate(["tournaments"])
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
