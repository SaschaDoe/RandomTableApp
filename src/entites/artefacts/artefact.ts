import {Entity} from "../entity";
import type {Equatable} from "../../utils/equatable";
import type {ArtefactBuilder} from "./artefactBuilder";
import {withoutLastSpace} from "../../utils/stringUtils";

export class Artefact extends Entity implements Equatable<Artefact>{
    rarity: string;
    quality: string;
    magicTalents: string[];
    materials: string[];
    type: string;

    constructor(artefactBuilder: ArtefactBuilder) {
        if(artefactBuilder.artefactName === undefined){
            throw Error("Artefact name must be set");
        }

        let name = artefactBuilder.artefactName;

        super(name,artefactBuilder.artefactId);

        if(artefactBuilder.artefactRarity === undefined){
            throw Error("Artefact rarity must be set");
        }
        this.rarity = artefactBuilder.artefactRarity;

        if(artefactBuilder.artefactQuality === undefined){
            throw Error("Artefact quality must be set");
        }
        this.quality = artefactBuilder.artefactQuality;

        if(artefactBuilder.artefactType === undefined){
            throw Error("Artefact type must be set");
        }
        this.type = artefactBuilder.artefactType;

        this.magicTalents = artefactBuilder.magicTalents;
        this.materials = artefactBuilder.artefactMaterials;
    }

    isEqualTo(other: Artefact){
        return(this.rarity === other.rarity)
    }

    toString(){
        let description = `${this.getUniqueName()} a ${this.rarity} ${this.quality} ${this.type} out of `;
        for(let i = 0; i < this.materials.length; i++){
            description += `${this.materials[i]} `;
            if(this.materials.length > 1 && i < this.materials.length-1){
                description += `and `;
            }
        }

        for(let i = 0; i < this.magicTalents.length; i++){
            if(i === 0){
                description += `with the power of `;
            }
            if(this.magicTalents.length > 1 && i !== 0){
                description += ` and the power of `;
            }
            description += `${this.magicTalents[i]}`;
            withoutLastSpace(description);
        }
        withoutLastSpace(description)
        description += ".";
        return description;
    }
}