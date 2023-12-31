import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/types/player';

@Component({
  selector: 'app-players-by-level',
  templateUrl: './players-by-level.component.html',
  styleUrls: ['./players-by-level.component.css']
})
export class PlayersByLevelComponent {

  constructor(private playerService: PlayerService) { }

  @Input() players: Player[] = []

  deletePlayer(name: string): void {
    this.playerService.deleteByName(name).subscribe(
      () => {
        const index = this.players.findIndex(player => player.name === name);
        if (index !== -1) {
          this.players.splice(index, 1);
        }
      },
      (error) => {
        console.error('Error deleting player:', error);
      }
    );
  }

  returnPlayerStars(players: Player[]) {
    if(players[0]) {
      return players[0].stars
    }

    return 0;
  }

}
