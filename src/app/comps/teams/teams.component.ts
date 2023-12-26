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
  @Input() teams: Team[] = [];




}
