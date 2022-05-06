import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/model/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  menus: any = [
    {
      label: "Feed",
      active: true,
      icon: "feed",
      route: "profile"
      // function: this.showTournamentTable
    },
    {
      label: "Grupos",
      active: false,
      icon: "group",
      route: "profile"
      // function: this.showTournamentTable
    },
    {
      label: "Torneios",
      active: false,
      icon: "emoji_events",
      route: "tournaments"
      // function: this.showTournamentTable
    },
    {
      label: "Perfil",
      active: false,
      icon: "account_circle",
      route: "profile"
      // function: this.showTournamentTable
    }
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changePage(menu: any) {
    this.menus.map(
      (m: any) => {
        if (m.label === menu.label) {
          m.active = true;
        } else {
          m.active = false;
        }
      });

      this.router.navigate([menu.route]);
  }
}
