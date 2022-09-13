import {Character} from "./character";
import {writable} from "svelte/store";
import {DisadvantageTable} from "../tables/charTables/disadvantageTable";
import {isInProbability} from "../utils/randomUtils";
import type {TableEntry} from "../tables/tableEntry";
import {MotivationTable} from "../tables/charTables/motivationTable";

export let characters = writable([] as Character[]);
export let currentChar = writable(Character);

export function addParty(sizeOfParty : number){

    let newChars = [] as Character[];
    for(let i=0; i<sizeOfParty; i++){
        let newChar = new Character();
        applyNotMandatoryTables(newChar);
        newChars.push(newChar);
    }

    characters.update((chars) =>{
        return chars.concat(newChars)
    })
}


function applyNotMandatoryTables(char : Character) {
    let notMandatoryTables = [new DisadvantageTable()]

    for (let t = 0; t < notMandatoryTables.length; t++) {
        let table = notMandatoryTables[t];
        let rolledEntries = [] as TableEntry[];
        while(isInProbability(table.probability)){
            let entry = table.roleWithCascade();
            if(rolledEntries.includes(entry)){
                continue;
            }
            rolledEntries.push(entry);
            for (let i = 0; i < table.functions.length; i++) {
                let func = table.functions[i];
                func(char, entry);
            }

            for (let i = 0; i < entry.functions.length; i++) {

                let func = entry.functions[i];
                func(char)

            }
        }
    }
}