import {Room} from "./room";
import type {Monster} from "../monster/monster";

export class RoomBuilder{
    roomTreasures: string[];
    roomFurnishings: string[];
    roomObstacles: string[];
    roomTraps: string[];
    roomEncounters: string[];
    roomMonsters: Monster[];

    constructor() {
        this.roomTreasures = [];
        this.roomFurnishings = [];
        this.roomObstacles = [];
        this.roomTraps = [];
        this.roomEncounters = [];
        this.roomMonsters = [];
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

    withEncounters(encounters: string[]) {
        this.roomEncounters = this.roomEncounters.concat(encounters);
        return this;
    }

    withMonsters(monsters: Monster[]) {
        this.roomMonsters = this.roomMonsters.concat(monsters);
        return this;
    }
}