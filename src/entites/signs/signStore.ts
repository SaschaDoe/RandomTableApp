import {writable} from "svelte/store";
import type {Sign} from "./sign";
import {SignFactory} from "./signFactory";

export let signStore = writable([] as Sign[]);

export function addSignToStore(sign: Sign){
    signStore.update(signStore => {
        signStore.push(sign);
        return signStore;
    })
}

export function addNewSignToStore(){
    let sign = new SignFactory().create();
    addSignToStore(sign);
    return sign;
}