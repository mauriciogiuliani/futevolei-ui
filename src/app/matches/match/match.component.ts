import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from 'src/model/match';
import { MatchService } from './match.service';

@Component({
  selector: 'ftv-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input()
  match!: Match;

  @Output()
  matchDetails: EventEmitter<string> = new EventEmitter();

  isMatchDetailsOpened: boolean = false;

  constructor(private httpClient: HttpClient, private matchService: MatchService) { }

  ngOnInit(): void {
    console.log("AA")
  }

  toggleMatchDetails(): void {
    console.log(this.isMatchDetailsOpened)
    this.isMatchDetailsOpened = !this.isMatchDetailsOpened;
  }

  saveMatchResult() {
    this.httpClient.post<any>("https://7hip2znooquhilsdo7mbn2ymui0yrxsl.lambda-url.us-east-1.on.aws", this.match).subscribe(
      data => {
        console.log(data);
        this.toggleMatchDetails();
      }
    );
  }

}
