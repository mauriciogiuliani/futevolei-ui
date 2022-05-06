import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


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
