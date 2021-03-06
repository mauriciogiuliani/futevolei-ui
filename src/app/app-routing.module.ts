import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { AuthGuardService } from './_helpers/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'tournaments', component: TournamentsComponent, canActivate: [AuthGuardService] },
  { path: 'tournaments/matches', component: MatchesComponent, canActivate: [AuthGuardService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
