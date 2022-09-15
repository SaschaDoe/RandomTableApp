import {Character} from "./character";
import {writable} from "svelte/store";
import {isInProbability} from "../utils/randomUtils";
import {DisadvantageTable} from "../tables/charTables/disadvantageTable";
import type {Table} from "../tables/table";
import {Relationship} from "./relationship";
import {RelationshipTypeTable} from "../tables/charTables/relationshipTypeTable";
import {CurseTable} from "../tables/charTables/curseTable";
import {AdvantageTable} from "../tables/charTables/advantageTable";
import type {RoleResult} from "../tables/roleResult";


export let characters = writable([] as Character[]);
export let currentChar = writable(Character);


export function addParty(sizeOfParty : number){

    let newChars = [] as Character[];
    for(let i=0; i<sizeOfParty; i++){
        let newChar = new Character();
        applyNotMandatoryTables(newChar);
        newChars.push(newChar);
    }
    connectChars(newChars);

    characters.update((chars) =>{
        return chars.concat(newChars)
    })
}

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

export function connectChars(newChars: Character[]) {
    for (let i = 0; i < newChars.length; i++) {
        for (let n = 0; n < newChars.length; n++) {
            let outerChar = newChars[i];
            let innerChar = newChars[n];
            if(outerChar != innerChar) {
                let found = false;
                for (let r = 0; r < outerChar.relationships.length; r++) {
                    let relationship = outerChar.relationships[r];
                    if (relationship.getOtherChar(outerChar) === innerChar) {
                        found = true;
                    }
                }
                if (found === false) {
                    let firstRelationshipType = new RelationshipTypeTable().role().text;
                    let secondRelationshipType = new RelationshipTypeTable().role().text;
                    let relationship = new Relationship(outerChar, innerChar, firstRelationshipType, secondRelationshipType);
                    outerChar.relationships.push(relationship);
                    innerChar.relationships.push(relationship);
                }
            }

        }
    }
}