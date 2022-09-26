import {Artefact} from "./artefact";

export class ArtefactBuilder{
    artefactRarity: string|undefined;
    artefactId: number|undefined;
    artefactName: string|undefined;

    constructor() {
    }

    withRarity(rarity: string) {
        this.artefactRarity = rarity;
        return this;
    }

    build() {
        return new Artefact(this);
    }

    withId(id: number) {
        this.artefactId = id;
        return this;
    }

    withName(name: string) {
        this.artefactName = name;
        return this;
    }
}