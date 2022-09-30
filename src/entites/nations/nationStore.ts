import {writable} from "svelte/store";
import {Nation} from "./nation";
import {NationRelationshipTable} from "../../tables/nationTables/nationRelationshipTable";

export let nationStore = writable([] as Nation[]);

export function addNewNation(){
    let nation = new Nation();
    nationStore.update(nations => {

        nations.forEach(localNation => {
            localNation.relationships.push([nation, new NationRelationshipTable().roleWithCascade().text])
            nation.relationships.push([localNation, new NationRelationshipTable().roleWithCascade().text])
        })

        nations.push(nation);
        return nations;
    })

    return nation;
}

export function addNewNationReturnDescription(){
    let nation = addNewNation();

    return nation.toString();
}