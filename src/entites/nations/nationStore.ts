import {writable} from "svelte/store";
import {Nation} from "./nation";

export let nationStore = writable([] as Nation[]);

export function addNewNationToStore(){
    let nation = new Nation();
    nationStore.update(nations => {
        nations.push(nation);
        return nations;
    })
    return nation;
}