import {writable} from "svelte/store";
import {Nation} from "./nation";
import {NationRelationshipTable} from "../../tables/nationTables/nationRelationshipTable";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {FirstNation} from "./firstNation";

export let nationStore = writable([new FirstNation()]);

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
    updateIndex();
    return nation;
}

export function addNewNationReturnUniqueName(){
    let nation = addNewNation();

    return nation.getUniqueName();
}

export function addNewNationReturnDescription(){
    let nation = addNewNation();

    return nation.toString();
}