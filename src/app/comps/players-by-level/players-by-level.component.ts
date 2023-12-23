import { Component,Input } from '@angular/core';
import { Player } from 'src/app/types/player';

@Component({
  selector: 'app-players-by-level',
  templateUrl: './players-by-level.component.html',
  styleUrls: ['./players-by-level.component.css']
})
export class PlayersByLevelComponent {
  @Input()
  player!: Player;
}
