import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
    }
  ]

  constructor() { }

  ngOnInit(): void { }


  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(event: any) {
  //   let headerMain = document.getElementById('header-main');

  //   if (headerMain) {
      // if (window.pageYOffset > 275) {
      //   headerMain.className.height = "100px"
      // }
    // }
  // }
}
