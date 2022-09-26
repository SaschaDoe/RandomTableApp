import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {ArtefactBuilder} from "./artefactBuilder";
import {TableTitles} from "../../tables/tableTitles";

export class ArtefactFactory{
    private tableRoller: TableRoller;
    private random: Random;

    artefactRarity = "";
    artefactName = "";
    artefactId = 0;

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.artefactRarity = tableRoller.roleFor(TableTitles.Rarity).text;
    }

    create() {
        return new ArtefactBuilder()
            .withId(this.artefactId)
            .withName(this.artefactName)
            .withRarity(this.artefactRarity)
            .build();
    }
}