import {writable} from "svelte/store";
import type {Continent} from "./continent";
import {ContinentFactory} from "./continentFactory";

export let continentStore = writable([] as Continent[]);

export function addNewContinentToStore(continentFactory = new ContinentFactory()){
    let continent = continentFactory.create();
    continentStore.update(continents => {
        continents.push(continent);
        return continents;
    })
}

export function addContinentToStore(continent: Continent){
    continentStore.update(continents => {
        if(!continents.includes(continent)){
            continents.push(continent);
        }
        return continents;
    })
}


