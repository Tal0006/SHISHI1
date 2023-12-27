import { Component,Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/types/player';

@Component({
  selector: 'app-players-by-level',
  templateUrl: './players-by-level.component.html',
  styleUrls: ['./players-by-level.component.css']
})
export class PlayersByLevelComponent {
  @Input()
  players!: Player[];

  constructor(private playerService: PlayerService) {}

  deletePlayer(name: string): void {
    this.playerService.deleteByName(name).subscribe(
      () => {
        // Remove the deleted player from the local array
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

  // deletePlayer(name: string)
  // {
  //   this.playerService.deleteByName(name).subscribe((data) => {
  //     console.log(data)
  //   })
  // }
}
