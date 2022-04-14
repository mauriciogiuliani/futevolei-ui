import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Match } from 'src/model/match';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches : Match[] = []
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>("https://7hip2znooquhilsdo7mbn2ymui0yrxsl.lambda-url.us-east-1.on.aws").subscribe(
      data => {
        console.log(data.Items);
        this.matches = data.Items;
      }
    );
  }

}
