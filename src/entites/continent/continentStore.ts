import {writable} from "svelte/store";
import type {Continent} from "./continent";
import {ContinentFactory} from "./continentFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {probabilityCheck, randomIntFromInterval} from "../../utils/randomUtils";

export let continentStore = writable([] as Continent[]);

export function addNewContinentToStore(continentFactory = new ContinentFactory()){
    let continent = continentFactory.create();
    return addContinentToStore(continent);
}

export function addContinentToStore(continent: Continent){
    continentStore.update(continents => {
        if(!continents.includes(continent)){
            continents.push(continent);
        }
        return continents;
    })
    updateIndex();
    return continent;
}

export function chooseAContinentFromStore(probability: number){
    let chosenContinent: Continent|undefined = undefined;
    if(probabilityCheck(probability)){
        continentStore.subscribe(continents => {
            let randomContinentIndex = randomIntFromInterval(0,continents.length-1);
            chosenContinent =  continents[randomContinentIndex];
        })
    }
    if(chosenContinent === undefined){
        return addNewContinentToStore();
    }else{
        return chosenContinent;
    }

}


