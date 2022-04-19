import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  { path: '', component: TournamentsComponent },
  { path: 'tournament/matches', component: MatchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
