import {generateContinentName} from "../tables/otherTables/nameGenerator";
import {GetId} from "./idGetter";
import {ContinentTable} from "../tables/locationTables/continentTable";


export class Site {
    description : string;
    name: string;
    id: number;
    localSpheres: Site[];
    isSphere: boolean;

    constructor(isSphere = false) {
        this.description = new ContinentTable().roleWithCascade().text;
        this.name = generateContinentName();
        this.id = GetId();
        this.localSpheres = [];
        this.isSphere = isSphere;
    }

    getUniqueName() {
        let uniqueName = this.id.toString();
        if(this.isSphere === true){
            uniqueName = uniqueName + " Sphere";
        }

        return  uniqueName + " " + this.name;
    }


}