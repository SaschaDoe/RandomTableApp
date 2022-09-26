import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {TableTitles} from "../../tables/tableTitles";
import {DungeonBuilder} from "./dungeonBuilder";

export class DungeonFactory{
    private tableRoller: TableRoller;
    private random: Random;
    dungeonName = "";
    dungeonId = -1;
    dungeonStructure = "";

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.setMandatoryAttributes();
    }

    create() {
        return new DungeonBuilder()
            .withName(this.dungeonName)
            .withId(this.dungeonId)
            .withStructure(this.dungeonStructure)
            .build();
    }

    private setMandatoryAttributes() {
        this.dungeonName = generateContinentName();
        this.dungeonStructure = this.tableRoller.roleFor(TableTitles.Structure).text;
    }


    withStructure(dungeonStructure: string) {
        this.dungeonStructure = dungeonStructure;
        return this;
    }
}