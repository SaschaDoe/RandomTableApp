import {writable} from "svelte/store";
import type {Continent} from "./continent";
import {ContinentFactory} from "./continentFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";

export let continentStore = writable([] as Continent[]);

export function addNewContinentToStore(continentFactory = new ContinentFactory()){
    let continent = continentFactory.create();
    addContinentToStore(continent);
}

export function addContinentToStore(continent: Continent){
    continentStore.update(continents => {
        if(!continents.includes(continent)){
            continents.push(continent);
        }
        return continents;
    })
    updateIndex();
}


