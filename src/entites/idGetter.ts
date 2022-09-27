import {writable} from "svelte/store";


export let idStore = writable(0);
export function getId(){
    let id = 0;
    idStore.update(idStore => {
        id = idStore;
        idStore++;
        return idStore;
    })
    return id;
}