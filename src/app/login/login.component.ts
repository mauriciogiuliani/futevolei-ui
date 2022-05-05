import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_authentication/authentication.service';
import { getCookie, setCookie } from '../_helpers/cookie.service';
import { LoginService } from './login.service';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private authenticationService: AuthenticationService) { }


  async ngOnInit() {

    // await google.accounts.id.initialize({
    //   client_id: "714491587198-mg6o6k2hfh94o4smdl50amspgj52qrm4.apps.googleusercontent.com",
    //   callback: this.authenticationService.googleLoginCallback
    // });

    // google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { theme: 'outline', size: 'large' }
    // );

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

  fbLogin(response : any) {
    console.log(response)
  }

  teste2() {
    console.log("native")
  }
  glogin() {
    console.log("Prompt")
    google.accounts.id.prompt(); // also display the One Tap dialog

  }

  glogout() {
    google.accounts.id.revoke('mauriciogiuliani@gmail.com', (done: any) => {
      console.log(done.error);
    });
    // google.accounts.id.cancel();
  }

  teste(response: any) {
    this.authenticationService.googleLoginCallback(response);
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
