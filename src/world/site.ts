import {generateContinentName} from "../tables/nameTables/nameGenerator";
import {ContinentTable} from "../tables/locationTables/continentTable";
import {Entity} from "./entity";
import type {Dungeon} from "./dungeon";


export class Site extends Entity{
    description : string;
    localSpheres: Site[];
    isSphere: boolean;
    dungeons: Dungeon[];

    constructor(isSphere = false) {
        let name = generateContinentName();
        super(name)
        this.description = new ContinentTable().roleWithCascade().text;
        this.localSpheres = [];
        this.isSphere = isSphere;
        this.dungeons = [];
    }

    getUniqueName() {
        let uniqueName = this.id.toString();
        if(this.isSphere === true){
            uniqueName = uniqueName + " Sphere";
        }

        return  uniqueName + " " + this.name;
    }


}