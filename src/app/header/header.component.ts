import { Component, HostListener, OnInit } from '@angular/core';
import { Menu } from 'src/model/menu';

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

  constructor() { }

  ngOnInit(): void {
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
