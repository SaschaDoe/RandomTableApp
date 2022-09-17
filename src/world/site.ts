import {generateContinentName} from "../tables/otherTables/nameGenerator";
import {GetId} from "./idGetter";
import {ContinentTable} from "../tables/locationTables/continentTable";
import {randomIntFromInterval} from "../utils/randomUtils";
import {SphereTable} from "../tables/locationTables/sphereTable";

export class Site {
    description : string;
    name: string;
    id: number;
    spheres: Site[];
    isSphere: boolean;

    constructor(isSphere = false) {
        this.description = new ContinentTable().roleWithCascade().text;
        this.name = generateContinentName();
        this.id = GetId();
        this.isSphere = isSphere;
        this.spheres = this.generateSpheres();
    }

    getUniqueName() {
        return this.id + " " + this.name;
    }

    private generateSpheres() {
        let spheres = [];
        if(this.isSphere === false){
            let numberOfSpheres = randomIntFromInterval(0,6);
            for(let i = 0; i < numberOfSpheres; i++){
                let sphere = new Site(true);
                sphere.description = new SphereTable().role().text;
                spheres.push(sphere);
            }
        }

        return spheres;
    }
}