import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatchesComponent } from './matches/matches.component';
import { NavigationBottomComponent } from './navigation-bottom/navigation-bottom.component';
import { ClassificationComponent } from './classification/classification.component';
import { MatchComponent } from './matches/match/match.component'
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { appInitializer } from './_helpers/app.initializer';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_authentication/authentication.service';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NavigationBottomComponent,
    ClassificationComponent,
    MatchComponent,
    LoadingComponent,
    HeaderComponent,
    TournamentsComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    { provide: APP_INITIALIZER,
      useFactory: appInitializer, 
      deps: [AuthenticationService],
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
