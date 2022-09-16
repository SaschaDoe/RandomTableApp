import {generateContinentName} from "../tables/otherTables/nameGenerator";
import {GetId} from "./idGetter";
import {ContinentTable} from "../tables/locationTables/continentTable";

export class Site {
    description : string;
    name: string;
    id: number;

    constructor() {
        this.description = new ContinentTable().roleWithCascade().text;
        this.name = generateContinentName();
        this.id = GetId();
    }

    getUniqueName() {
        return this.id + " " + this.name;
    }
}