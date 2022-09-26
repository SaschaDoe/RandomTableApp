import {Room} from "./room";

export class RoomBuilder{
    roomTreasures: string[];

    constructor() {
        this.roomTreasures = [];
    }

    build(){
        return new Room(this);
    }

    withTreasures(treasures: string[]) {
        this.roomTreasures = this.roomTreasures.concat(treasures);
        return this;
    }
}