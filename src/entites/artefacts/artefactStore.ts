import {writable} from "svelte/store";
import type {Artefact} from "./artefact";
import {ArtefactFactory} from "./artefactFactory";
import {updateIndex} from "../../summary/updateSummaryIndex";

export let artefactStore = writable([] as Artefact[]);

export function addArtefactToStore(artefact: Artefact){
    artefactStore.update(artefacts => {
        artefacts.push(artefact);
        return artefacts;
    })
    updateIndex();
    return artefact;
}

export function addNewArtefactToStore(){
    let artefact = addArtefactToStore(new ArtefactFactory().create());
    addArtefactToStore(artefact);
    return artefact;
}

export function addArtefactToStoreReturnUniqueName(){
    let artefact = addArtefactToStore(new ArtefactFactory().create());
    return artefact.getUniqueName();
}