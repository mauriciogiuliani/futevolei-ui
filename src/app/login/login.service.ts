import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { removeCookie, setCookie } from '../_helpers/cookie.service';

declare const FB: any;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private router: Router) { }

  google() {
    gapi.load('auth2', function () {
      gapi.auth2.init({
        "client_id": "714491587198-mg6o6k2hfh94o4smdl50amspgj52qrm4.apps.googleusercontent.com"
      })
      /* Ready. Make a call to gapi.auth2.init or some other API */
    });
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  facebookLogin() {
    new Promise<boolean>((resolve) => {
      FB.login(function (response: any) {
        if (response.status == "connected") {

          FB.api('/me?fields=email,name', function (response: any) {
            const cookie = {
              name: response.name,
              email: response.email
            }

            setCookie("user", JSON.stringify(cookie));

            console.log(response)
            console.log('Successful login for: ' + response.email);
          });

          resolve(true);
        } else {
          resolve(false)
        }

      }, { scope: 'public_profile,email' });
    }).then(result => {
      if (result) {
        this.router.navigate(["tournaments"]);
      }
    });

  }


  // login with facebook and return observable with fb access token on success
  // return from(new Promise<any>(resolve => FB.login(resolve)))
  //   .pipe(concatMap(({ authResponse }) => {
  //     if (!authResponse) {
  //       return EMPTY;
  //     }
  //     return of(authResponse.accessToken);
  //   }));


  async isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      FB.getLoginStatus(function (response: any) {
        // handle the response
        console.log(response)

        if (response.status == "connected") {
          resolve(true);
        } else {
          resolve(false)
        }
      });
    });
  }


  email() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=email,name', function (response: any) {
      console.log(response)
      console.log('Successful login for: ' + response.email);

    });
  }



  logout() {
    removeCookie("user");

    FB.getLoginStatus(function (response: any) {
      // handle the response
      console.log(response)

      if (response.status == "connected") {
        FB.logout();
      }
    });

  }


}
