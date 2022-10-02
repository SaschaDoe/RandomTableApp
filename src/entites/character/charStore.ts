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

export function chooseNSCFromStore(probability = 90){
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
export let higherPowerChooseProbability = 90;
export function chooseHigherPower(probability = higherPowerChooseProbability){
    if(probabilityCheck(probability)){
        let character: Character|undefined;
        higherPowerBeingsStore.subscribe(higherPowers => {
            let randomIndex = randomIntFromInterval(0,higherPowers.length-1);
            character = higherPowers[randomIndex];
        })
        if(character === undefined){
            return createHigherPower();
        }
        return character;
    }
    return createHigherPower();
}

export function chooseHigherPowerReturnDescription(probability = higherPowerChooseProbability){
    let higherPower = chooseHigherPower(probability)
    return higherPower.toString();
}

export function chooseHigherPowerReturnUniqueName(probability = higherPowerChooseProbability){
    let higherPower = chooseHigherPower(probability)
    return higherPower.getUniqueName();
}

export function createHigherPowerReturnDescription(){
    let higherPower = new CharacterFactory().createHigherPower();
    addHigherPowerToStore(higherPower);
    return higherPower.toString();
}

export function createHigherPower(){
    let higherPower = new CharacterFactory().createHigherPower();
    addHigherPowerToStore(higherPower);
    return higherPower;
}

export function addHigherPowerToStore(higherPower: Character){
    higherPowerBeingsStore.update(powers => {
        powers.push(higherPower);
        return powers;
    })
}


export function addNewNSCToCharacterStoreReturnDescription(characterFactory = new CharacterFactory()){
    let char = addNewNSCToCharacterStore(characterFactory)
    return char.toString();
}