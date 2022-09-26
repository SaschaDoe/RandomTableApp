import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {ContinentBuilder} from "./continentBuilder";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {TableTitles} from "../../tables/tableTitles";
import type {Dungeon} from "../dungeons/dungeon";

export class ContinentFactory{
    private tableRoller: TableRoller;
    private random: Random;
    continentName = "";
    continentId = -1;
    private continentDescription = "";
    private continentDungeons: Dungeon[];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random
        this.continentDungeons = [];

        this.setMandatoryAttributes();
    }

    create() {
        return new ContinentBuilder()
            .withName(this.continentName)
            .withId(this.continentId)
            .withDescription(this.continentDescription)
            .withDungeons(this.continentDungeons)
            .build();
    }

    private setMandatoryAttributes() {
        this.continentName = generateContinentName();
        this.continentDescription = this.tableRoller.roleFor(TableTitles.Continent).text;
    }

    withDungeon(dungeon: Dungeon) {
        this.continentDungeons.push(dungeon);
    }
}