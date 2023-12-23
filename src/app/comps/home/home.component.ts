import { Component } from '@angular/core';
import { Player } from 'src/app/types/player';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  players: Player[] =  []
  teams: Player[][] = []
  showTeamsComp: boolean = false;
  full20: boolean = false;

  ngOnInit()
  {
    this.initList()
  }


  initList()
  {
    let player1: Player = new Player("ערן אוחיון", 5)
    let player2: Player = new Player("גלעד תנעמי", 5)
    let player3: Player = new Player("ויקטור פרץ", 5)
    let player4: Player = new Player("שאול בנימין", 5)
    let player5: Player = new Player("טל אוחיון", 4)
    let player6: Player = new Player("אבי אנקונינה", 4)
    let player7: Player = new Player("מוטי ברהום", 4)
    let player8: Player = new Player("רון חמו", 4)
    let player9: Player = new Player("יורם אלי", 3)
    let player10: Player = new Player("מיקי שמש", 3)
    let player11: Player = new Player("בן פלס", 3)
    let player12: Player = new Player("שלום אלי", 3)
    let player13: Player = new Player("משה אברהם", 2)
    let player14: Player = new Player("כפיר עזריה", 2)
    let player15: Player = new Player("עידן סופר", 2)
    let player16: Player = new Player("איציק אלקיים", 2)
    let player17: Player = new Player("גרשון זכרוב", 1)
    let player18: Player = new Player("שילה עבדיאן", 1)
    let player19: Player = new Player("תמיר גבאי", 1)
    let player20: Player = new Player("מאור פלולי", 1)
    
    this.players.push(player1,
      player2,
      player3,
      player4,
      player5,
      player6,
      player7,
      player8,
      player9,
      player10,
      player11,
      player12,
      player13,
      player14,
      player15,
      player16,
      player17,
      player18,
      player19,
      player20);
      let pl = this.shuffle(this.players)

      for(let i = 0; i < 10; i ++)
      {
        pl = this.shuffle(this.players)
      }
      this.teams = this.divideIntoTeams(pl)
      this.full20 = true;
  }

  shuffleAgain()
  {
    let pl = this.shuffle(this.players)
    for(let i = 0; i < 10; i ++)
      {
        pl = this.shuffle(this.players)
      }
      this.teams = this.divideIntoTeams(pl)
  }

  addPlayer(name: string, stars: number) {
    console.log(name, stars)
    let player: Player = new Player(name, stars)
    this.players.push(player)

    if(this.players.length === 20)
      this.full20 = true;
  }


  showPlayersData() {
    for (let i of this.players) {
      i.showPlayerData()
    }
  }

  shuffle(array: Player[]): Player[] {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array;
  }

  divideIntoTeams(players: Player[]): Player[][] {
    const teams: Player[][] = [[], [], [], []];
  
    players.forEach((player, index) => {
      let teamIndex = index % teams.length;
      let attempts = 0;
  
      // Try to assign the player to a team with unique stars
      while (
        teams[teamIndex].some((p) => p.stars === player.stars) &&
        attempts < teams.length
      ) {
        teamIndex = (teamIndex + 1) % teams.length;
        attempts++;
      }
  
      if (attempts < teams.length) {
        teams[teamIndex].push(player);
      } else {
        // Handle the case where it's not possible to assign the player uniquely
        console.error(`Unable to assign ${player.name} to a team with unique stars.`);
      }
    });
    
    console.log(teams)
    return teams;
  }

  showTeams()
  {
    this.showTeamsComp = true
  }

  groupPlayersByStars(players: Player[]): Player[][] {
    // Create an array to hold arrays of players based on stars
    const groupedPlayers: Player[][] = [];
  
    // Group players by stars
    players.forEach((player) => {
      // Find the index for the corresponding star value in the grouped array
      const index = player.stars - 1;
  
      // If the array for that star value doesn't exist, create it
      if (!groupedPlayers[index]) {
        groupedPlayers[index] = [];
      }
  
      // Push the player to the corresponding array based on stars
      groupedPlayers[index].push(player);
    });
  
    return groupedPlayers;
  }
}
