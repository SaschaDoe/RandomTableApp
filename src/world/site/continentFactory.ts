import type {Dice} from "../../utils/dice";
import {Site} from "./site";
import {continentStore, sphereStore} from "./siteStore";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {SphereTable} from "../../tables/locationTables/sphereTable";
import {updateIndex} from "../../summary/updateSummaryIndex";

export function mapSiteWithChar(dice: Dice) {

    let randomNumber = dice.getRandomInt(0, 10);
    let numberOfSites = 0
    continentStore.subscribe(sites => {
        numberOfSites = sites.length
    })

    if (randomNumber === 1 || numberOfSites === 0) {
        let continent = createContinent();
        continentStore.update((s) => {
            s.push(continent);
            return s;
        });
    } else {
        let randomContinentIndex = dice.getRandomInt(0, numberOfSites-1);
        continentStore.subscribe(sites => {
            let continent = sites[randomContinentIndex]
            return continent;
        })
    }
    return new Site();
}

export function createContinent(){
    let continent = new Site();
    continent.localSpheres = generateSpheres();
    updateIndex();
    return continent;
}

function generateSpheres() {
    let spheres = [];
    let numberOfSpheres = randomIntFromInterval(-100, 12);
    for (let i = 0; i < numberOfSpheres; i++) {
        let sphere = new Site(true);
        sphereStore.update((spheres) => {
            spheres.push(sphere);
            return spheres;
        })
        sphere.description = new SphereTable().roleWithCascade().text;
        spheres.push(sphere);
    }


    return spheres;
}