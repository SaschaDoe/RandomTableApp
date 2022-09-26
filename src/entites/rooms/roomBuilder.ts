import {Room} from "./room";

export class RoomBuilder{
    roomTreasures: string[];
    roomFurnishings: string[];

    constructor() {
        this.roomTreasures = [];
        this.roomFurnishings = [];
    }

    build(){
        return new Room(this);
    }

    withTreasures(treasures: string[]) {
        this.roomTreasures = this.roomTreasures.concat(treasures);
        return this;
    }

    withFurnishing(furnishing: string[]) {
        this.roomFurnishings = this.roomFurnishings.concat(furnishing);
        return this;

    }
}