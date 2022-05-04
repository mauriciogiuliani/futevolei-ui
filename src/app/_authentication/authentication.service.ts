import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { setCookie } from '../_helpers/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

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
