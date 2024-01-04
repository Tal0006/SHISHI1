import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { FixturesComponent } from './comps/fixtures/fixtures.component';
import { PlayersByLevelComponent } from './comps/players-by-level/players-by-level.component';
import { TeamsComponent } from './comps/teams/teams.component';
import { PlayersComponent } from './comps/players/players.component'


const routes : Routes = [
    {path : '', component: HomeComponent},
    {path : 'players', component: PlayersComponent},
    {path : 'teams', component: TeamsComponent},
    {path : 'fixtures', component: FixturesComponent},
]


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}