import {writable} from "svelte/store";
import {Fraction} from "./fraction";

export let fractionStore = writable([] as Fraction[]);

export function addNewFractionToStore(){
    let fraction = new Fraction();
    fractionStore.update(fractions =>{
        fractions.push(fraction);
        return fractions;
    })
    return fraction;
}