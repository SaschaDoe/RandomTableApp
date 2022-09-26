import {Character} from "./character";
import {writable} from "svelte/store";
import {CharacterFactory} from "./characterFactory";

export let characters = writable([] as Character[]);
export let higherPowerBeingsStore = writable([] as Character[]);
export let currentChar = writable(Character);

export function addNSCToCharacterStore(){
    characters.update(chars => {
        let character = new CharacterFactory().create();
        chars.push(character);
        return chars;
    })
}