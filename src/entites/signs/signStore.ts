import {writable} from "svelte/store";
import type {Sign} from "./sign";

export let signStore = writable([] as Sign[]);

export function AddSignToStore(sign: Sign){
    signStore.update(signStore => {
        signStore.push(sign);
        return signStore;
    })
}