import {writable} from "svelte/store";
import type {Artefact} from "./artefact";
import {ArtefactFactory} from "./artefactFactory";

export let artefactStore = writable([] as Artefact[]);

export function addArtefactToStore(){
    let artefact = new ArtefactFactory().create()
    artefactStore.update(artefacts => {
        artefacts.push(artefact);
        return artefacts;
    })
    return artefact;
}

export function addArtefactToStoreReturnUniqueName(){
    let artefact = addArtefactToStore();
    return artefact.getUniqueName();
}