import type {Room} from "./room";
import {AllocationTable} from "../tables/locationTables/allocationTable";
import {DungeonEntriesTable} from "../tables/locationTables/dungeonEntriesTable";
import {DungeonNameTable} from "../tables/nameTables/dungeonNameTable";
import {Entity} from "./entity";

export class Dungeon extends Entity {
    allocation: string;
    entryBuilding: string;
    rooms: Room[]

    constructor() {
        super();
        this.allocation = new AllocationTable().role().text;
        this.entryBuilding = new DungeonEntriesTable().roleWithCascade().text;
        this.rooms = [];
        this.name = new DungeonNameTable().roleWithCascade().text
    }

}