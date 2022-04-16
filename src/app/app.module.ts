import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    NavigationBottomComponent,
    ClassificationComponent,
    MatchComponent,
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
