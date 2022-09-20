import {Room} from "./room";
import {StructureTable} from "../../tables/locationTables/structureTable";
import {DungeonEntriesTable} from "../../tables/locationTables/dungeonEntriesTable";
import {DungeonNameTable} from "../../tables/nameTables/dungeonNameTable";
import {Entity} from "../entity";
import {TreasureTable} from "../../tables/artefactTables/treasureTable";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {FurnishingTable} from "../../tables/locationTables/furnishingTable";
import {createNSC} from "../character/characterFactory";

export class Dungeon extends Entity {
    structure: string;
    entryBuilding: string;
    rooms: Room[]

    constructor() {
        super();
        this.structure = new StructureTable().roleWithCascade().text;
        this.entryBuilding = new DungeonEntriesTable().roleWithCascade().text;
        this.rooms = [];
        this.name = new DungeonNameTable().roleWithCascade().text
    }



}

export function generateRoom(dungeon: Dungeon){
    let rooms = [] as Room[];

    let numberOfTreasures = randomIntFromInterval(-2,2);
    let treasures = [] as string[];
    for(let i = 0; i < numberOfTreasures; i++){
        treasures.push(new TreasureTable().roleWithCascade().text);
    }

    let numberOfFurnishing = randomIntFromInterval(1,3);
    let furnishing = [] as string[];
    for(let i = 0; i < numberOfFurnishing; i++){
        furnishing.push(new FurnishingTable().roleWithCascade().text);
    }

    let numberOfCharacters = randomIntFromInterval(-1,2);
    let chars = [] as string[];
    for(let i = 0; i < numberOfCharacters; i++){
        chars.push(createNSC());
    }
    dungeon.rooms.push(new Room(treasures, furnishing, chars));
}