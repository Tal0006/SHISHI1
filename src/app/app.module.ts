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
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FixturesComponent } from './comps/fixtures/fixtures.component'
import { FixtureService } from './services/fixture.service';
import { NavBarComponent } from './comps/nav-bar/nav-bar.component';
import { PlayersComponent } from './comps/players/players.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    PlayersByLevelComponent,
    FixturesComponent,
    NavBarComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    PlayerService,
    TeamService,
    FixtureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
