import { TeamService } from 'src/app/services/team.service';
// teams.component.ts
import { Component, Input } from '@angular/core';
import { Player } from '../../types/player'; // Update the path accordingly
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  @Input() team!: Team;

  constructor(private teamService: TeamService) {}

  ngOnInit() 
  {
    this.makeLeaders();
  }

  getPlayersNames(team: Team)
  {
    this.teamService.getPlayersNames(team).subscribe((data) => {
      console.log("Team Players Names: ", data);
    })
  }

  getTeams()
  {
    this.teamService.getAllTeams().subscribe((data1 : any) => {
      
    })
  }

  // createTeams()
  // {
  //   this.teams.forEach((team) => {
  //     this.createTeam(team, this.teamLeader(team));
  //   })
  // }

  createTeam(teamData: Team, teamLead: string){
    let bodyData = {
      "name": teamLead,
      "playersArray": teamData,
      "numOfWins": 0
    }

    this.teamService.createTeam(bodyData).subscribe((data) => {
      console.log("Team Data ===> : ", data)
    })
  }

  teamLeader(team: Team)
  {
    return team.playersArray.filter((player : Player) => player.stars === 5)[0].name
  }


  makeLeaders()
  {
    this.team.name = this.teamLeader(this.team)
    console.log(this.team.name)
  }

}
