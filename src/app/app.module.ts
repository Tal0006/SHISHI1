import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamsComponent } from './comps/teams/teams.component';
import { PlayersByLevelComponent } from './comps/players-by-level/players-by-level.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    PlayersByLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
