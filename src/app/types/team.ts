import { Player } from 'src/app/types/player';

export class Team {
    players: Player[] = []

    constructor(player: Player) 
    {
        this.players.push(player)
    }
}
