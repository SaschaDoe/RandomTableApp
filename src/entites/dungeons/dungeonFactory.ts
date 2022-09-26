import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {TableTitles} from "../../tables/tableTitles";
import {DungeonBuilder} from "./dungeonBuilder";
import {DungeonEntriesTable} from "../../tables/locationTables/dungeonEntriesTable";
import type {Room} from "../rooms/room";

export class DungeonFactory{
    private tableRoller: TableRoller;
    private random: Random;
    dungeonName = "";
    dungeonId = -1;
    dungeonStructure = "";
    dungeonEntryBuilding = "";
    dungeonRooms: Room[];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random
        this.dungeonRooms = [];
        this.setMandatoryAttributes();
    }

    create() {
        return new DungeonBuilder()
            .withName(this.dungeonName)
            .withId(this.dungeonId)
            .withStructure(this.dungeonStructure)
            .withEntryBuilding(this.dungeonEntryBuilding)
            .withRooms(this.dungeonRooms)
            .build();
    }

    private setMandatoryAttributes() {
        this.dungeonName = generateContinentName();
        this.dungeonStructure = this.tableRoller.roleFor(TableTitles.Structure).text;
        this.dungeonEntryBuilding = this.tableRoller.roleFor(TableTitles.DungeonEntry).text;
    }
}