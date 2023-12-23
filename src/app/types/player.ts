export class Player {
    name: string = '';
    stars: number = 0;
    hasTeam: boolean = false;

    constructor(name:string, stars: number)
    {
        this.name = name;
        this.stars = stars;
    }

    showPlayerData()
    {
        console.log("----------------------------")
        console.log("Name: ", this.name)
        console.log("Stars: ", this.stars)
        console.log("----------------------------")
    }
}
