import {Room} from "./room";

export class RoomBuilder{
    roomTreasures: string[];
    roomFurnishings: string[];
    roomObstacles: string[];
    roomTraps: string[];

    constructor() {
        this.roomTreasures = [];
        this.roomFurnishings = [];
        this.roomObstacles = [];
        this.roomTraps = [];
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

    withObstacles(obstacles: string[]){
        this.roomObstacles = this.roomObstacles.concat(obstacles);
        return this;
    }

    withTraps(traps: string[]) {
        this.roomTraps = this.roomTraps.concat(traps);
        return this;
    }
}