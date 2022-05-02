import { Component, HostListener, OnInit } from '@angular/core';
import { Menu } from 'src/model/menu';
import { LoginService } from '../login/login.service';
import { getCookie } from '../_helpers/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus: Menu[] = [
    {
      label: "Feed",
      active: false,
      icon: "inbox",
      // function: this.showTournamentTable
    },
    {
      label: "Torneios",
      active: true,
      icon: "emoji_events",
      // function: this.showTournamentTable
    },

    // {
    //   label: "Jogos",
    //   active: true,
    //   icon: "sports_soccer",
    //   // function: this.showTournamentTable
    // },
    {
      label: "Rankings",
      active: false,
      icon: "analytics",
      // function: this.showTournamentTable
    },
    // {
    //   label: "Tabela",
    //   active: false,
    //   icon: "toc",
    //   // function: this.showTournamentTable
    // },



  ];

  _isUserLoggedIn : boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  get isUserLoggedIn() : boolean {
    const userCookie = getCookie("user");
 
    if(userCookie) {
      return true;
    }
 
    return false;
 
   }

  logout() {
    this.loginService.logout()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    let headerMain = document.getElementById('header-main');

    if (headerMain) {
      // if (window.pageYOffset > 275) {
      //   headerMain.className.height = "100px"
      // }
    }
  }
}
