import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getCookie, removeCookie, setCookie } from '../_helpers/cookie.service';
import { UserInfo } from '../_model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private router: Router) { }

  getUserInfo() : UserInfo {
    return JSON.parse(getCookie("user"));
  }

  endSession() {
    removeCookie("user");
    window.location.href = window.location.protocol + "//" + window.location.hostname
  }


  googleLoginCallback(response: any) {
    console.log("AAA")
    console.log(response);

    const decodedResponse: any = JSON.parse(atob(response.credential.split(".")[1]));

    console.log(decodedResponse);
    console.log(decodedResponse.email);

    const cookie = {
      name: decodedResponse.name,
      email: decodedResponse.email
    }

    console.log("settingCookie" + JSON.stringify(cookie));

    setCookie("user", JSON.stringify(cookie));
    window.location.assign(window.location.href + "/tournaments")
    
  }
}
