import { PlayerService } from 'src/app/services/player.service';
import { Component, Input } from '@angular/core';
import { FixtureService } from 'src/app/services/fixture.service';
import { TeamService } from 'src/app/services/team.service';
import { Fixture } from 'src/app/types/fixture';
import { Team } from 'src/app/types/team';
import { Player } from 'src/app/types/player';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent {

  teams: Team[] = [];
  fixtures: Fixture[] = [];

  constructor(private teamService: TeamService, private fixtureService: FixtureService, private PlayerService: PlayerService) {}

  ngOnInit() {
    this.getAllFixtures();
  }

  // getAllTeams() {
  //   this.teamService.getAllTeams().subscribe((data1 : any) => {
  //     data1.data.map((team: Team) => {
  //       this.teams.push(new Team(team.name, team.playersArray, team.numOfWins))
  //     })
  //   })
  // }

  getTeamsWithPlayersNames(team: Team) {
    let tempTeam: Team = new Team('', [], 0)
    tempTeam.name = team.name;
    team.playersArray.forEach((player) => {
      this.PlayerService.getPlayer(player.toString()).subscribe((data1: any) => {
        tempTeam.playersArray.push(data1.data)
      })
    })
    this.teams.push(tempTeam)
  }

  getAllFixtures() {
    this.fixtureService.getAllFixtures().subscribe((data1: any) => {
      data1.data.map((fixture: Fixture) => {
        this.fixtures.push(new Fixture(fixture.matchDay, fixture.teamArray, fixture.date))
        fixture.teamArray.forEach((team) => {
          this.getTeamById(team);
        })
      })
    })
  }

  getTeamById(id: any) {
    this.teamService.getTeamByID(id).subscribe((data1: any) => {
      this.getTeamsWithPlayersNames(data1.data)
    })
  }


}
