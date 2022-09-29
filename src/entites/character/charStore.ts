import {Character} from "./character";
import {writable} from "svelte/store";
import {CharacterFactory} from "./characterFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {probabilityCheck} from "../../utils/randomUtils";

export let characters = writable([] as Character[]);
export let higherPowerBeingsStore = writable([] as Character[]);
export let currentChar = writable(Character);

export function addNewNSCToCharacterStoreReturnUniqueName(characterFactory = new CharacterFactory()){
    let char = addNewNSCToCharacterStore(characterFactory)
    return char.getUniqueName();
}

export function addNewNSCToCharacterStore(characterFactory = new CharacterFactory()){
    let character = createCharWhenNoInStore();
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

function createHigherPowerWhenNoInStore(chooseOldProbability: number) {
    let higherPower: Character | undefined
    if (probabilityCheck(chooseOldProbability)) {
        characters.subscribe(chars => {
            chars.forEach(char => {
                if (char.isHigherPower) {
                    higherPower = char;
                    return
                }
            })
        })
    }
    if (higherPower === undefined) {
        higherPower = new CharacterFactory().createHigherPower();
    }
    return higherPower;
}

function createCharWhenNoInStore(chooseOldProbability = 100) {
    let character: Character | undefined
    if (probabilityCheck(chooseOldProbability)) {
        characters.subscribe(chars => {
            chars.forEach(char => {
                if (!char.isHigherPower) {
                    character = char;
                    return
                }
            })
        })
    }
    if (character === undefined) {
        character = new CharacterFactory().create();
    }
    return character;
}

export function createHigherPowerReturnUniqueName(chooseOldProbability = 100){
    let higherPower = createHigherPowerWhenNoInStore(chooseOldProbability);

    addNSCToCharacterStore(higherPower);
    return higherPower.getUniqueName();
}

export function createHigherPowerReturnDescription(chooseOldProbability = 100){
    let higherPower = createHigherPowerWhenNoInStore(chooseOldProbability);
    addNSCToCharacterStore(higherPower);
    return higherPower.toString();
}


export function addNewNSCToCharacterStoreReturnDescription(characterFactory = new CharacterFactory()){
    let char = addNewNSCToCharacterStore(characterFactory)
    return char.toString();
}