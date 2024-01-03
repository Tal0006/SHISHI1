import { Team } from "./team";

export class Fixture {
    matchDay: number = 0;
    teamArray: Team[] = [];
    date: string = '';

    constructor(matchday: number, teamArray: Team[], date: string) {
        this.matchDay = matchday;
        this.teamArray = teamArray;
        this.date = date;
    }
}
