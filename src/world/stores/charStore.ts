import {Character} from "../character";
import {writable} from "svelte/store";
import {isInProbability} from "../../utils/randomUtils";
import {DisadvantageTable} from "../../tables/charTables/disadvantageTable";
import type {Table} from "../../tables/table";
import {CurseTable} from "../../tables/charTables/curseTable";
import {AdvantageTable} from "../../tables/charTables/advantageTable";
import type {RoleResult} from "../../tables/roleResult";


export let characters = writable([] as Character[]);
export let currentChar = writable(Character);

export function applyNotMandatoryTables(char : Character) {
    let notMandatoryTables = [new AdvantageTable(), new DisadvantageTable(), new CurseTable()];

    for (let t = 0; t < notMandatoryTables.length; t++) {
        let table = notMandatoryTables[t];
        let rolledEntries = [] as string[];
        while(isInProbability(table.probability)){
            let entry = table.roleWithCascade();
            if(rolledEntries.includes(entry.text)){
                continue;
            }
            rolledEntries.push(entry.text);
            applyTableFunctions(entry, table, char);
            applyEntryFunctions(entry, char);
        }
    }
}

export function applyEntryFunctions(roleResult: RoleResult, char: Character){
    for (let i = 0; i < roleResult.functions.length; i++) {

        let func = roleResult.functions[i];
        let newChar = func(char);

        characters.update(val => [...val, newChar])

    }
}

export function applyTableFunctions(roleResult: RoleResult, table: Table, char: Character){
    for (let i = 0; i < table.functions.length; i++) {
        let func = table.functions[i];
        func(char, roleResult);
    }
}