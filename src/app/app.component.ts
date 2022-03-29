import { Component, OnInit } from '@angular/core';
import { Match } from 'src/model/match';
import { HttpClient } from "@angular/common/http";
// import  * as matchesJson from './tabela.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'futevolei-ui';

  matches: Match[] = [];

  sideNavOpened : boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Match[]>("../assets/tabela.json").subscribe(
      data => {
        console.log(data);
        this.matches = data;
      });
  }

  toggleSideNav() : void {
    this.sideNavOpened = !this.sideNavOpened;
  }

}
