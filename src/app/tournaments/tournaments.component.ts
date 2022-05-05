import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { AuthenticationService } from '../_authentication/authentication.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    window.alert(window.location.protocol + "://" + window.location.hostname)
    window.location.href = window.location.protocol + "//" + window.location.hostname
  }

  userEmail() {
    return this.authenticationService.getUserInfo().email;
  }

}
