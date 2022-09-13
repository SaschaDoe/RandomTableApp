import {Character} from "./character";
import {writable} from "svelte/store";

export let characters = writable([] as Character[]);
export let currentChar = writable(new Character());

export function addParty(sizeOfParty : number){
    let newChars = [] as Character[];
    for(let i=0; i<sizeOfParty; i++){
        newChars.push(new Character());
    }

    characters.update((chars) =>{
        return chars.concat(newChars)
    })
}