// teams.component.ts
import { Component, Input } from '@angular/core';
import { Player } from '../../types/player'; // Update the path accordingly

@Component({
  selector: 'app-teams',
  template: `
    <div *ngFor="let team of teams; let i = index" class="team">
      <h2>Team {{ i + 1 }}</h2>
      <ul>
        <li *ngFor="let player of team">
          {{ player.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
    .team {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 20px;
      background-color: #f8f8f8;
    }
    
    h2 {
      color: #333;
    }
    
    ul {
      list-style-type: none;
      padding: 0;
    }
    
    li {
      margin: 5px 0;
      padding: 8px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    /* Optional: Hover effect on list items */
    li:hover {
      background-color: #f0f0f0;
    }
    `,
  ],
})
export class TeamsComponent {
  @Input() teams: Player[][] = [];
}
