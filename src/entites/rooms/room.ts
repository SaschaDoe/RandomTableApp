import type {RoomBuilder} from "./roomBuilder";
import type {Monster} from "../monster/monster";

export class Room{
    treasures: string[];
    furnishing: string[];
    obstacles: string[];
    traps: string[];
    encounters: string[];
    monsters: Monster[];

    constructor(roomBuilder: RoomBuilder) {
        this.treasures = roomBuilder.roomTreasures;
        this.furnishing = roomBuilder.roomFurnishings;
        this.obstacles = roomBuilder.roomObstacles;
        this.traps = roomBuilder.roomTraps;
        this.encounters = roomBuilder.roomEncounters;
        this.monsters = roomBuilder.roomMonsters;
    }

}