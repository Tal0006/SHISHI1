import { Player } from 'src/app/types/player';

export class Team {
    name: string;
    playersArray: Player[]; // You can replace any[] with the actual type you're using for players
    numOfWins: number;

    constructor(name: string, playersArray: Player[], numOfWins: number) {
        this.name = name;
        this.playersArray = playersArray;
        this.numOfWins = numOfWins;
    }
}
