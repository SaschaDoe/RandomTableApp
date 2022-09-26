import type {ContinentBuilder} from "./continentBuilder";
import {Entity} from "../entity";

export class Continent extends Entity{
    constructor(continentBuilder: ContinentBuilder) {
        if(continentBuilder.continentName === undefined){
            throw Error("Continents name must be set")
        }
        let name = continentBuilder.continentName;
        let id = continentBuilder.continentId;
        super(name, id);
    }
}