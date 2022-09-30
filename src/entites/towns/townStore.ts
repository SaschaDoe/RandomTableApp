import {writable} from "svelte/store";
import {Town} from "./town";

export let townStore = writable([] as Town[])

export function addNewTownToStore(){
    let town = new Town();
    townStore.update(towns => {
        towns.push(town);
        return towns;
    })
    return town;
}

export function addNewTownToStoreReturnDescription(){
    return addNewTownToStore().toString();
}