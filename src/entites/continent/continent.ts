import type {ContinentBuilder} from "./continentBuilder";
import {Entity} from "../entity";
import type {Dungeon} from "../dungeons/dungeon";

export class Continent extends Entity{
    description: string;
    dungeons: Dungeon[]
    spheres: string[];

    constructor(continentBuilder: ContinentBuilder) {
        if(continentBuilder.continentName === undefined){
            throw Error("Continents name must be set")
        }
        let name = continentBuilder.continentName;
        let id = continentBuilder.continentId;
        super(name, id);

        if(continentBuilder.continentDescription === undefined){
            throw Error("Continents description must be set")
        }
        this.description = continentBuilder.continentDescription;
        this.spheres = continentBuilder.continentSpheres;
        this.dungeons = continentBuilder.continentDungeons;
    }

    toString(){
        return `${this.getUniqueName()} a ${this.description} continent.`;
    }
}