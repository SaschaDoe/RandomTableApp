import {writable} from "svelte/store";
import {Nation} from "./nation";
import {NationRelationshipTable} from "../../tables/nationTables/nationRelationshipTable";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {FirstNation} from "./firstNation";
import {probabilityCheck, randomIntFromInterval} from "../../utils/randomUtils";

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

export function chooseNationFromStore(probability = 100){
    if(probabilityCheck(probability)){
        let nation: Nation|undefined;
        nationStore.subscribe(nations => {
            let randomIndex = randomIntFromInterval(0,nations.length-1);
            nation = nations[randomIndex];
        })
        if(nation === undefined){
            return addNewNation();
        }
        return nation;
    }
    return addNewNation();
}

export function chooseNationReturnDescription(probability = 100){
    let nation = chooseNationFromStore(probability);

    return nation.toString();
}

export function chooseNationReturnUniqueName(probability = 100){
    let nation = chooseNationFromStore(probability);

    return nation.getUniqueName();
}

export function addNewNationReturnUniqueName(){
    let nation = addNewNation();

    return nation.getUniqueName();
}

export function addNewNationReturnDescription(){
    let nation = addNewNation();

    return nation.toString();
}