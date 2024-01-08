import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/types/player';
import { Team } from 'src/app/types/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  playersByLevel: Player[][] = [[], [], [], [], [], []];

  teams: Team[] = [];

  constructor(private playerService: PlayerService, private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.getAllPlayers()
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe((data1: any) => {
      data1.data.map((player: any) => {
        this.playersByLevel[player.stars - 1].push(new Player(player.name, player.stars))
      })
      console.log(this.playersByLevel)
    })
  }

  addPlayer(name_: string, stars_: number) {

    let bodyData = {
      "name": name_,
      "stars": stars_
    }

    this.playersByLevel[stars_ - 1].push(new Player(name_, stars_))
    this.playerService.addPlayer(bodyData).subscribe((data) => {
      console.log(data)
    })
  }

  divideToTeams(players: Player[]): Team[] {
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

  initList(players: Player[])
  {
      let pl = this.shuffle(players)

      for(let i = 0; i < 10; i ++)
      {
        pl = this.shuffle(players)
      }
      this.teams = this.divideToTeams(pl)
  }

  shuffle(array: Player[]): Player[] {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async makeTeams() {
    await this.initList(this.flatPlayersArray());
    this.createTeams();
  }

  teamLeader(team: Team) {
    return team.playersArray.filter((player: Player) => player.stars === 5)[0].name
  }

  createTeams() {
    this.teams.forEach((team) => {
      this.createTeam(team, this.teamLeader(team))
    })
  }

  createTeam(teamData: Team, teamLead: string) {
    let bodyData = {
      "name": teamLead,
      "playersArray": teamData,
      "numOfWins": 0
    }

    this.teamService.createTeam(bodyData).subscribe((data) => {
      console.log("Team Data ===> : ", data)
    })
  }



  flatPlayersArray() {
    return this.playersByLevel.reduce((acc, row) => acc.concat(row), []);
  }


  moveToTeamsPage() {
    this.router.navigate(['/teams'])
  }

}
