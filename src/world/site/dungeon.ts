import {Room} from "./room";
import {StructureTable} from "../../tables/locationTables/structureTable";
import {DungeonEntriesTable} from "../../tables/locationTables/dungeonEntriesTable";
import {DungeonNameTable} from "../../tables/nameTables/dungeonNameTable";
import {Entity} from "../entity";
import {TreasureTable} from "../../tables/artefactTables/treasureTable";
import {randomIntFromInterval} from "../../utils/randomUtils";

export class Dungeon extends Entity {
    structure: string;
    entryBuilding: string;
    rooms: Room[]

    constructor() {
        super();
        this.structure = new StructureTable().roleWithCascade().text;
        this.entryBuilding = new DungeonEntriesTable().roleWithCascade().text;
        this.rooms = this.generateRooms();
        this.name = new DungeonNameTable().roleWithCascade().text
    }

    generateRooms(){
        let rooms = [] as Room[];
        let numberOfTreasures = randomIntFromInterval(-2,2);
        let treasures = [] as string[];
        for(let i = 0; i < numberOfTreasures; i++){
            treasures.push(new TreasureTable().roleWithCascade().text);
        }
        rooms.push(new Room(treasures));
        return rooms;
    }

}