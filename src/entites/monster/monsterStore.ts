import {writable} from "svelte/store";
import {Monster} from "./monster";

export let monsterStore = writable([] as Monster[]);

export function addMonsterToStore(){
    let monster = new Monster();
    monsterStore.update(monsters => {
        monsters.push(monster);
        return monsters;
    })
    return monster.getUniqueName();
}

export function getNewMonsterInStore(){
    let monster = new Monster();
    monsterStore.update(monsters => {
        monsters.push(monster);
        return monsters;
    })
    return monster;
}