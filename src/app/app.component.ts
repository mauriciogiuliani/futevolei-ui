import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Match } from 'src/model/match';
import { Menu } from 'src/model/menu';
import { Team } from 'src/model/team';
// import  * as matchesJson from './tabela.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'futevolei-ui';

  matches: Match[] = [];

  doubles: Team[] = [
    {
      playerA: {
        name: 'Abreu'
      },
      playerB: {
        name: "Barba"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    },
    {
      playerA: {
        name: "Kennedy"
      },
      playerB: {
        name: "Rafael"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    },
    {
      playerA: {
        name: "Dotto"
      },
      playerB: {
        name: "Murilo"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    },
    {
      playerA: {
        name: "Tripa"
      },
      playerB: {
        name: "Kako"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    },
    {
      playerA: {
        name: "Kleber"
      },
      playerB: {
        name: "Juliano"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    },
    {
      playerA: {
        name: "Canatta"
      },
      playerB: {
        name: "Mauricio"
      },
      matches: 0,
      wins: 0,
      loss: 0,
      balance: 0
    }

  ]

  sideNavOpened: boolean = false;

  isMatchDetailsOpened: boolean = false;

  menus: Menu[] = [
    {
      label: "Jogos",
      active: true,
      icon: "sports_soccer",
      // function: this.showTournamentTable
    },
    {
      label: "Tabela",
      active: false,
      icon: "toc",
      // function: this.showTournamentTable
    },
    {
      label: "Ranking",
      active: false,
      icon: "emoji_events",
      // function: this.showTournamentTable
    },
    {
      label: "Histórico",
      active: false,
      icon: "history",
      // function: this.showTournamentTable
    }
  ]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Match[]>("../assets/tabela.json").subscribe(
      data => {
        console.log(data);
        this.matches = data;
        this.refreshTournamentTable();
      });


  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }

  toggleMatchDetails(): void {
    console.log(this.isMatchDetailsOpened)
    this.isMatchDetailsOpened = !this.isMatchDetailsOpened;
  }

  changePage(menuLabel: string) {
    console.log(menuLabel)
    this.menus.map(m => {
      if (m.label === menuLabel) {
        m.active = true;
      } else {
        m.active = false;
      }
    });
  }

  refreshTournamentTable() {
    this.matches.filter(match =>
      match.pointsTeamA > 0 && match.pointsTeamB > 0
    ).forEach(match => {
      if (match.pointsTeamA > 0 && match.pointsTeamB > 0) {

        let teamAIndex = this.doubles.findIndex(double =>
          double.playerA.name === match.teamA.playerA.name && double.playerB.name == match.teamA.playerB.name
        );
        let teamBIndex = this.doubles.findIndex(double =>
          double.playerA.name == match.teamB.playerA.name && double.playerB.name == match.teamB.playerB.name
        );

        if (teamAIndex >= 0 && teamBIndex >= 0) {
          if (match.pointsTeamA > match.pointsTeamB) {
            this.doubles[teamAIndex].matches++
            this.doubles[teamAIndex].wins++
            this.doubles[teamAIndex].balance += (match.pointsTeamA - match.pointsTeamB)

            this.doubles[teamBIndex].matches++
            this.doubles[teamBIndex].loss++
            this.doubles[teamBIndex].balance += (match.pointsTeamB - match.pointsTeamA)
          } else {
            this.doubles[teamAIndex].matches++
            this.doubles[teamAIndex].loss++
            this.doubles[teamAIndex].balance += (match.pointsTeamA - match.pointsTeamB)

            this.doubles[teamBIndex].matches++
            this.doubles[teamBIndex].wins++
            this.doubles[teamBIndex].balance += (match.pointsTeamB - match.pointsTeamA)
          }
        }
      }
    });

    this.doubles.sort((a, b) => {
      if (a.wins > b.wins) {
        return -1;
      }
      if (a.wins < b.wins) {
        return 1;
      } else {
        console.log("AAA")
        if (a.balance > b.balance) {
          return -1
        } if (a.balance < b.balance) {
          return 1;
        } else {
          return 0;
        }
      }
    });

  }

}
