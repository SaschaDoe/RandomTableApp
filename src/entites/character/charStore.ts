import {Character} from "./character";
import {writable} from "svelte/store";
import {CharacterFactory} from "./characterFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {probabilityCheck, randomIntFromInterval} from "../../utils/randomUtils";

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

export function chooseNSCReturnUniqueName(){
    return chooseNSCFromStore().getUniqueName();
}

export function addRulerToStore(){
    return addNewNSCToCharacterStore(new CharacterFactory().withNickname());
}

export function chooseNSCFromStore(probability = 100){
    if(probabilityCheck(probability)){
        let character: Character|undefined;
        characters.subscribe(characters => {
            let randomIndex = randomIntFromInterval(0,characters.length-1);
            character = characters[randomIndex];
        })
        if(character === undefined){
            return addNewNSCToCharacterStore();
        }
        return character;
    }
    return addNewNSCToCharacterStore();
}

export function addNSCsToCharacterStore(chars: Character[]){
    chars.forEach(char => addNSCToCharacterStore(char));
}

export function createHigherPowerReturnUniqueName(){
    let higherPower = new CharacterFactory().createHigherPower();
    addNSCToCharacterStore(higherPower);
    return higherPower.getUniqueName();
}

export function createHigherPowerReturnDescription(){
    let higherPower = new CharacterFactory().createHigherPower();
    addNSCToCharacterStore(higherPower);
    return higherPower.toString();
}


export function addNewNSCToCharacterStoreReturnDescription(characterFactory = new CharacterFactory()){
    let char = addNewNSCToCharacterStore(characterFactory)
    return char.toString();
}