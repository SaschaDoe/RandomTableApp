import {Entity} from "../entity";
import type {Equatable} from "../../utils/equatable";
import type {ArtefactBuilder} from "./artefactBuilder";

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
            if(this.materials.length > 1){
                description += `and `;
            }
        }

        for(let i = 0; i < this.magicTalents.length; i++){
            if(i === 0){
                description += `with the power of ${this.magicTalents[i]} `;
            }
            if(this.magicTalents.length > 1){
                description += `and the power of ${this.magicTalents[i]}`;
            }
            description = description.slice(0,description.length-1);
        }
        description += ".";
        return description;
    }
/*
    addTalent(){
        this.talents.push(new MagicalTalentTable().roleWithCascade().text);
    }

    private updateDescription() {
        this.description = `a ${this.rarity} ${this.quality} ${this.material} ${this.typeOfArtefact}`;
        this.addTalentDescription();
    }

    private addTalentDescription() {
        for (let i = 0; i < this.talents.length; i++) {
            if(i === 0){
                this.description += " with the power of "
            }else {
                this.description += " and with the power of "
            }

            let talent = this.talents[i];
            this.description += talent;
        }
    }
    */
}