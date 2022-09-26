import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {ArtefactBuilder} from "./artefactBuilder";
import {TableTitles} from "../../tables/tableTitles";
import {generateName} from "../../tables/nameTables/nameGenerator";

export let magicTalentsMinInterval = -1;
export let magicTalentMaxInterval = 2;
export let materialsMinInterval = 1;
export let materialsMaxInterval = 2;

export class ArtefactFactory{
    private tableRoller: TableRoller;
    private random: Random;

    artefactRarity = "";
    artefactName = "";
    artefactId = -1;
    artefactMagicTalents: string[] = [];
    artefactQuality = "";
    artefactMaterials: string[] = [];
    artefactType = "";

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random
        this.artefactQuality = tableRoller.roleFor(TableTitles.Quality).text;
        this.artefactRarity = tableRoller.roleFor(TableTitles.Rarity).text;
        this.artefactType = tableRoller.roleFor(TableTitles.Artefact).text;
        this.artefactName = generateName(3);

        this.setAllNonMandatoryAttribute();
    }

    private setAllNonMandatoryAttribute() {
        this.setNonMandatory(magicTalentsMinInterval, magicTalentMaxInterval, this.artefactMagicTalents, TableTitles.MagicalTalent)
        this.setNonMandatory(materialsMinInterval, materialsMaxInterval, this.artefactMaterials, TableTitles.Materials)
    }

    private setNonMandatory(minInterval: number, maxInterval: number, artefactAttribute: string[], tableTitle: TableTitles) {
        let randomNumber = this.random.intFromInterval(minInterval,maxInterval);
        if(randomNumber <= 0 && minInterval === 1){
            randomNumber = 0;
        }
        for(let i = 0; i < randomNumber; i++){
            artefactAttribute.push(this.tableRoller.roleFor(tableTitle).text);
        }
    }

    create() {
        return new ArtefactBuilder()
            .withName(this.artefactName)
            .withId(this.artefactId)
            .withRarity(this.artefactRarity)
            .withMagicTalents(this.artefactMagicTalents)
            .withQuality(this.artefactQuality)
            .withMaterials(this.artefactMaterials)
            .withType(this.artefactType)
            .build();
    }


}