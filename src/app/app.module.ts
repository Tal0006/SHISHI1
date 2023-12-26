import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamsComponent } from './comps/teams/teams.component';
import { PlayersByLevelComponent } from './comps/players-by-level/players-by-level.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    PlayersByLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PlayerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
