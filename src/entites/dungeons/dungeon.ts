import type {DungeonBuilder} from "./dungeonBuilder";
import {Entity} from "../entity";

export class Dungeon extends Entity{
    structure: string;

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
    }

    toString(){
        return `${this.getUniqueName()} a dungeon with ${this.structure}.`;
    }


}