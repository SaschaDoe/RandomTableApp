import {Dungeon} from "./dungeon";
import type {Room} from "../rooms/room";

export class DungeonBuilder{
    dungeonName: string|undefined;
    dungeonId: number|undefined;
    dungeonStructure: string|undefined;
    dungeonEntryBuilding: string|undefined;
    dungeonRooms: Room[] = [];

    build() {
        return new Dungeon(this);
    }

    withName(name: string){
        this.dungeonName = name;
        return this;
    }

    withId(id: number) {
        this.dungeonId = id;
        return this;
    }

    withStructure(structure: string) {
        this.dungeonStructure = structure;
        return this;
    }

    withEntryBuilding(entry: string) {
        this.dungeonEntryBuilding = entry;
        return this;
    }

    withRooms(rooms: Room[]) {
        this.dungeonRooms = this.dungeonRooms.concat(rooms);
        return this;
    }
}