import {Races} from "../tables/charTables/races";

export class Character{
    name : string;
    race : string;

    constructor(race = Races.Human, name = "no name") {
        this.name = name;
        this.race = race;
    }
}