import {Entity} from "../entity";
import type {Equatable} from "../../utils/equatable";
import type {ArtefactBuilder} from "./artefactBuilder";

export class Artefact extends Entity implements Equatable<Artefact>{
    readonly rarity: string;

    /*
    talents: string[];
    description: string;
    rarity: string;
    quality: string;
    material: string;
    typeOfArtefact: string;
    name: string;
*/
    constructor(artefactBuilder: ArtefactBuilder) {
        let name = "";

        super(name);

        if(artefactBuilder.artefactRarity === undefined){
            throw Error("Artefact rarity must be set");
        }
        this.rarity = artefactBuilder.artefactRarity;
        /*
        this.rarity = new RarityTable().roleWithCascade().text;
        this.quality = new QualityTable().roleWithCascade().text;
        this.material = new MaterialsTable().roleWithCascade().text;
        this.typeOfArtefact = new ArtefactTable().roleWithCascade().text;
        this.description = "";
        this.name =  new ArtefactAdjectiveTable().roleWithCascade().text+ " " + this.typeOfArtefact + " of "+new EpicSubstantiveTable().roleWithCascade().text;
        this.talents = [];
        let randomNumberOfTalents = randomIntFromInterval(0,2);
        if(isMagical){
            randomNumberOfTalents = randomIntFromInterval(1,2);
        }
        for(let i = 0; i < randomNumberOfTalents; i++){
            this.addTalent();
        }
        this.updateDescription();

         */
    }

    isEqualTo(other: Artefact){
        return(this.rarity === other.rarity)
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