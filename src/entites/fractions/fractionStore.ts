import {writable} from "svelte/store";
import {Fraction} from "./fraction";
import {probabilityCheck, Random, randomIntFromInterval} from "../../utils/randomUtils";
import {addNewNSCToCharacterStore} from "../character/charStore";
import {CharacterFactory} from "../character/characterFactory";

export let fractionStore = writable([] as Fraction[]);

export function addNewFractionToStore(){
    let fraction = new Fraction();
    let randomNumberOfMembers = new Random().intFromInterval(1,3);
    for(let i = 0; i < randomNumberOfMembers; i++){
        let fractionFactory = new CharacterFactory().withMembership(fraction);
        addNewNSCToCharacterStore(fractionFactory);
    }
    fractionStore.update(fractions =>{
        fractions.push(fraction);
        return fractions;
    })
    return fraction;
}

export function addNewFractionToStoreReturnUniqueName(){
    let fraction = addNewFractionToStore()
    return fraction.getUniqueName();
}

export function addNewFractionToStoreReturnDescription(){
    let fraction = addNewFractionToStore()
    return fraction.toString();
}

export function chooseFractionFromStore(probability = 100){
    if(probabilityCheck(probability)){
        let fraction: Fraction|undefined;
        fractionStore.subscribe(fractions => {
            let randomFractionIndex = randomIntFromInterval(0,fractions.length-1);
            fraction = fractions[randomFractionIndex];
        })
        if(fraction === undefined){
            return addNewFractionToStore();
        }
        return fraction;
    }
    return addNewFractionToStore();
}

export function chooseFractionFromStoreReturnUniqueName(){
    return chooseFractionFromStore().getUniqueName();
}

export function chooseFractionFromStoreReturnDescription(){
    return chooseFractionFromStore().toString();
}

export function chooseTwoFractionFromStoreWithUniqueName(){
    let fractions = [];
    fractionStore.subscribe(fractionStore => fractions = fractionStore);

    if(probabilityCheck(80) && fractions.length > 1){
        let chosenFractions = [] as Fraction[];
        fractionStore.subscribe(fractions => {
            let randomFractionIndex1 = randomIntFromInterval(0,fractions.length-1);
            let randomFractionIndex2 = randomIntFromInterval(0,fractions.length-1);
            if(randomFractionIndex1 === randomFractionIndex2){
                if(randomFractionIndex2 === 0){
                    randomFractionIndex1 = 1;
                }else{
                    randomFractionIndex1 = 0;
                }
            }
            chosenFractions.push(fractions[randomFractionIndex1]);
            chosenFractions.push(fractions[randomFractionIndex2]);
        })
        return `${chosenFractions[0].getUniqueName()} and ${chosenFractions[1].getUniqueName()}.`;
    }
    return `${addNewFractionToStore().getUniqueName()} and ${addNewFractionToStore().getUniqueName()}.`;
}