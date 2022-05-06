import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_authentication/authentication.service';
import { UserInfo } from 'src/app/_model/UserInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo: UserInfo = {
    name: '',
    email: '',
    nickname: ''
  }

  constructor(private authenticatioService: AuthenticationService) { }

  ngOnInit(): void {
    this.userInfo = this.authenticatioService.getUserInfo();
  }

  updateProfile() {

  }

  endSession() {
    this.authenticatioService.endSession();
  }

}
