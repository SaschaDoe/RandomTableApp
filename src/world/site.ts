import {generateContinentName} from "../tables/otherTables/nameGenerator";
import {ContinentTable} from "../tables/locationTables/continentTable";
import {Entity} from "./entity";


export class Site extends Entity{
    description : string;
    localSpheres: Site[];
    isSphere: boolean;

    constructor(isSphere = false) {
        let name = generateContinentName();
        super(name)
        this.description = new ContinentTable().roleWithCascade().text;
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