import {Artefact} from "./artefact";

export class ArtefactBuilder{
    artefactRarity: string|undefined;
    artefactId: number|undefined;
    artefactName: string|undefined;
    magicTalents: string[];
    artefactQuality: string | undefined;
    artefactMaterials: string[];
    artefactType: string|undefined;

    constructor() {
        this.magicTalents = [];
        this.artefactMaterials = [];
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

    withMagicTalents(magicTalents: string[]) {
        this.magicTalents = this.magicTalents.concat(magicTalents);
        return this;
    }

    withQuality(quality: string){
        this.artefactQuality = quality;
        return this;
    }

    withMaterials(materials: string[]){
        this.artefactMaterials = materials;
        return this;
    }

    withType(type: string){
        this.artefactType = type;
        return this;
    }
}