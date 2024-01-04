import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/types/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  playersByLevel: Player[][] = [[], [], [], [], [], []];

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.getAllPlayers()
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe((data1: any) => {
      data1.data.map((player : any) => {
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

  moveToTeamsPage() {
    this.router.navigate(['/teams'])
  }

}
