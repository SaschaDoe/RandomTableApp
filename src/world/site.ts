import {generateContinentName} from "../tables/otherTables/nameGenerator";

export class Site {
    description : string;
    name: string;

    constructor() {
        this.description = "-";
        this.name = generateContinentName();
    }
}