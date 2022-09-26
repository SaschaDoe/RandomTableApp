import {Dungeon} from "./dungeon";

export class DungeonBuilder{
    dungeonName: string|undefined;
    dungeonId: number|undefined;
    dungeonStructure: string|undefined;

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
}