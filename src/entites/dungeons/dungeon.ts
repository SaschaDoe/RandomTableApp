import type {DungeonBuilder} from "./dungeonBuilder";
import {Entity} from "../entity";
import type {Room} from "../rooms/room";

export class Dungeon extends Entity{
    structure: string;
    entryBuilding: string;
    rooms: Room[];

    constructor(dungeonBuilder: DungeonBuilder) {
        if(dungeonBuilder.dungeonName === undefined){
            throw Error("Dungeon name must be set.");
        }
        let name = dungeonBuilder.dungeonName;
        let id = -1;
        if(dungeonBuilder.dungeonId !== undefined){
            id = dungeonBuilder.dungeonId;
        }
        super(name,id);
        if(dungeonBuilder.dungeonStructure === undefined){
            throw Error("Dungeon structure must be set.");
        }
        this.structure = dungeonBuilder.dungeonStructure;
        if(dungeonBuilder.dungeonEntryBuilding === undefined){
            throw Error("Dungeon entry building must be set.");
        }
        this.entryBuilding = dungeonBuilder.dungeonEntryBuilding;

        this.rooms = dungeonBuilder.dungeonRooms;
    }

    toString(){
        let description =  `${this.getUniqueName()} a ${this.entryBuilding} with ${this.structure}. `+"\n";

        description += `it has ${this.rooms.length} rooms. ` +"\n"

        for(let i = 0; i < this.rooms.length; i++){
            description += this.rooms[i].toString() +"\n";
        }

        return description;
    }


}