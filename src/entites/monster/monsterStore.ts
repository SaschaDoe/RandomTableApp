import {writable} from "svelte/store";
import {Monster} from "./monster";
import {updateIndex} from "../../summary/updateSummaryIndex";

export let monsterStore = writable([] as Monster[]);

export function addNewMonsterToStoreReturnUniqueName(){
    let monster = new Monster();
    addMonsterInStore(monster);
    return monster.getUniqueName();
}

export function addMonsterInStore(monster: Monster){
    monsterStore.update(monsters => {
        monsters.push(monster);
        return monsters;
    })
    updateIndex();
}
