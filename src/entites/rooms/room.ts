import type {RoomBuilder} from "./roomBuilder";

export class Room{
    treasures: string[];

    constructor(roomBuilder: RoomBuilder) {
        this.treasures = roomBuilder.roomTreasures;
    }

}