import {Character} from "./character";
import {writable} from "svelte/store";
import {CharacterFactory} from "./characterFactory";
import {addContinentToStore} from "../continent/continentStore";
import {updateIndex} from "../../summary/updateSummaryIndex";

export let characters = writable([] as Character[]);
export let higherPowerBeingsStore = writable([] as Character[]);
export let currentChar = writable(Character);

export function addNewNSCToCharacterStore(characterFactory = new CharacterFactory()){
    let character = characterFactory.create();
    addNSCToCharacterStore(character);

    addContinentToStore(character.homeContinent);

    return character.getUniqueName();
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

    let continents = chars.map(chars => chars.homeContinent).filter(onlyUnique);
    continents.forEach(continent => {
        addContinentToStore(continent);
    })
}

function onlyUnique(value: any, index: any, self:any) {
    return self.indexOf(value) === index;
}

export function createHigherPowerReturnUniqueName(){
    let higherPower = new CharacterFactory().createHigherPower();
    addNSCToCharacterStore(higherPower);
    return higherPower.getUniqueName();
}
