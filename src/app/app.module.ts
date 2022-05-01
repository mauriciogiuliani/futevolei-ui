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
import { HeaderComponent } from './header/header.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { appInitializer } from './_helpers/app.initializer';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
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
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
