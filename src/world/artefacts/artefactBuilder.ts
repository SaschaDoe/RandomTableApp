import {Artefact} from "./artefact";

export class ArtefactBuilder{
    artefactRarity: string|undefined;

    constructor() {
    }

    withRarity(rarity: string) {
        this.artefactRarity = rarity;
        return this;
    }

    build() {
        return new Artefact(this);
    }
}