import {Character} from "./character";
import {writable} from "svelte/store";
import {CharacterFactory} from "./characterFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";

export let characters = writable([] as Character[]);
export let higherPowerBeingsStore = writable([] as Character[]);
export let currentChar = writable(Character);

export function addNewNSCToCharacterStoreReturnUniqueName(characterFactory = new CharacterFactory()){
    let char = addNewNSCToCharacterStore(characterFactory)
    return char.getUniqueName();
}

export function addNewNSCToCharacterStore(characterFactory = new CharacterFactory()){
    let character = characterFactory.create();
    addNSCToCharacterStore(character);
    return character;
}

export function addNSCToCharacterStore(char: Character){
    characters.update(characterStore => {
        characterStore.push(char);
        return characterStore;
    })
    updateIndex();

}

export function addNSCsToCharacterStore(chars: Character[]){
    chars.forEach(char => addNSCToCharacterStore(char));
}

export function createHigherPowerReturnUniqueName(){
    let higherPower = new CharacterFactory().createHigherPower();
    addNSCToCharacterStore(higherPower);
    return higherPower.getUniqueName();
}
