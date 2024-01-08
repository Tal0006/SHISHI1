import { FixtureService } from 'src/app/services/fixture.service';
import { Component } from '@angular/core';
import { Team } from 'src/app/types/team';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/types/player';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {

  constructor(private playerService: PlayerService, private teamService: TeamService, private route: ActivatedRoute,
    private fixtureService: FixtureService) { }

  teams: Team[] = [];

  players: Player[] = []

  ngOnInit() {
    this.getAllTeams()
  }


  getAllTeams() {
    this.teamService.getAllTeams().subscribe((data1 : any) => {
      data1.data.map((team: Team) => {
        this.teams.push(new Team(team.name, team.playersArray, team.numOfWins))
      })
    })
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe((data1: any) => {
      data1.data.map((player : any) => {
        this.players.push(new Player(player.name, player.stars))
      })

      this.initList()
    })
  }

  initList()
  {
      let pl = this.shuffle(this.players)

      for(let i = 0; i < 10; i ++)
      {
        pl = this.shuffle(this.players)
      }
      this.teams = this.dividTemp(pl)
  }

  shuffle(array: Player[]): Player[] {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  dividTemp(players: Player[]): Team[] {
    const teams: Team[] = [];

    for (let i = 1; i <= 5; i++) {
      const team = new Team(`Team${i}`, [], 0); // Adjust the default values as needed
      teams.push(team);
    }
  
    players.forEach((player, index) => {
      let teamIndex = index % teams.length;
      let attempts = 0;
  
      // Try to assign the player to a team with unique stars
      while (
        teams[teamIndex].playersArray.some((p) => p.stars === player.stars) &&
        attempts < teams.length
      ) {
        teamIndex = (teamIndex + 1) % teams.length;
        attempts++;
      }
  
      if (attempts < teams.length) {
        teams[teamIndex].playersArray.push(player);
      } else {
        // Handle the case where it's not possible to assign the player uniquely
        console.error(`Unable to assign ${player.name} to a team with unique stars.`);
      }
    });
    
    return teams;
  }


  deleteTeam(teamName: string) {
    this.teamService.deleteTeam(teamName).subscribe(() => {
      const index = this.teams.findIndex(team => team.name === teamName);
      if (index !== -1) {
        this.teams.splice(index, 1);
      }
    },
    (error) => {
      console.error('Error deleting team:', error);
    }
  );
  }

  teamLeader(team: Team) {
    return team.playersArray.filter((player : Player) => player.stars === 5)[0].name
  }

  shuffleAgain()
  {
    let pl = this.shuffle(this.players)
    for(let i = 0; i < 10; i ++)
      {
        pl = this.shuffle(this.players)
      }
      this.teams = this.dividTemp(pl)
  }

  createTeams() {
    this.teams.forEach((team) => {
      this.createTeam(team, this.teamLeader(team))
    })
  }

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


  createFixture(matchDay: number, date: string) {
    let body = {
      "matchDay": matchDay,
      "teamArray": this.teams,
      "date": date
    }

    this.fixtureService.addFixture(body).subscribe((data) => {
      console.log(data);
    })
  }

}
