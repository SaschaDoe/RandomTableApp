import {Entity} from "../entity";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {MagicalTalentTable} from "../../tables/talentTables/magicalTalentTable";
import {RarityTable} from "../../tables/otherTables/rarityTable";
import {QualityTable} from "../../tables/otherTables/qualityTable";
import {MaterialsTable} from "../../tables/artefactTables/materialsTable";
import {ArtefactTable} from "../../tables/artefactTables/artefactTable";
import {EpicSubstantiveTable} from "../../tables/nameTables/epicSubstantiveTable";

export class Artefact extends Entity{
    talents: string[];
    description: string;
    rarity: string;
    quality: string;
    material: string;
    typeOfArtefact: string;

    constructor(isMagical = false) {
        super();
        this.rarity = new RarityTable().roleWithCascade().text;
        this.quality = new QualityTable().roleWithCascade().text;
        this.material = new MaterialsTable().roleWithCascade().text;
        this.typeOfArtefact = new ArtefactTable().roleWithCascade().text;
        this.description = "";
        this.name = new EpicSubstantiveTable().roleWithCascade().text + " " + this.typeOfArtefact;
        this.talents = [];
        let randomNumberOfTalents = randomIntFromInterval(0,2);
        if(isMagical){
            randomNumberOfTalents = randomIntFromInterval(1,2);
        }
        for(let i = 0; i < randomNumberOfTalents; i++){
            this.addTalent();
        }
    }

    addTalent(){
        this.talents.push(new MagicalTalentTable().roleWithCascade().text);
        this.updateDescription();
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
}