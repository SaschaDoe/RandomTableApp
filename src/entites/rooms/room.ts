import type {RoomBuilder} from "./roomBuilder";

export class Room{
    treasures: string[];
    furnishing: string[];

    constructor(roomBuilder: RoomBuilder) {
        this.treasures = roomBuilder.roomTreasures;
        this.furnishing = roomBuilder.roomFurnishings;
    }

}