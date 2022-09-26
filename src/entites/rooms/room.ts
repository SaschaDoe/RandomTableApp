import type {RoomBuilder} from "./roomBuilder";

export class Room{
    treasures: string[];
    furnishing: string[];
    obstacles: string[];
    traps: string[];

    constructor(roomBuilder: RoomBuilder) {
        this.treasures = roomBuilder.roomTreasures;
        this.furnishing = roomBuilder.roomFurnishings;
        this.obstacles = roomBuilder.roomObstacles;
        this.traps = roomBuilder.roomTraps;
    }

}