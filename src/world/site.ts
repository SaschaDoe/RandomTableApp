import {generateContinentName} from "../tables/otherTables/nameGenerator";
import {GetId} from "./idGetter";
import {ContinentTable} from "../tables/locationTables/continentTable";
import {randomIntFromInterval} from "../utils/randomUtils";
import {SphereTable} from "../tables/locationTables/sphereTable";


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
        this.isSphere = isSphere;
        this.localSpheres = this.generateSpheres();
    }

    getUniqueName() {
        return this.id + " " + this.name;
    }

    private generateSpheres() {
        let localSpheres = [];
        if(this.isSphere === false){
            let numberOfSpheres = randomIntFromInterval(0,6);
            for(let i = 0; i < numberOfSpheres; i++){
                let sphere = new Site(true);
                /*spheres.update(spheres => {
                    spheres.push(sphere);
                    return spheres;
                })*/
                sphere.description = new SphereTable().role().text;
                localSpheres.push(sphere);
            }
        }

        return localSpheres;
    }
}