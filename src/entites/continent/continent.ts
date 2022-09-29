import type {ContinentBuilder} from "./continentBuilder";
import {Entity} from "../entity";
import type {Dungeon} from "../dungeons/dungeon";
import type {Nation} from "../nations/nation";

export class Continent extends Entity{
    description: string;
    dungeons: Dungeon[]
    spheres: string[];
    nations: Nation[];

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
        this.nations = continentBuilder.nations;
    }

    toString(){
        let description = `${this.getUniqueName()} a ${this.description} continent. \n`;

        for(let i = 0; i < this.spheres.length; i++){
            description += `with sphere ${this.spheres[i]} \n`;
        }

        return description;
    }
}