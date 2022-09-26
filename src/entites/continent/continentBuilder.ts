import {Continent} from "./continent";
import type {Dungeon} from "../dungeons/dungeon";

export class ContinentBuilder{
    continentName: string|undefined;
    continentId = -1;
    continentDescription: string|undefined;
    continentDungeons: Dungeon[] = [];

    build() {
        return new Continent(this);
    }

    withName(name: string){
        this.continentName = name;
        return this;
    }

    withId(id: number){
        this.continentId = id;
        return this;
    }

    withDescription(description: string){
        this.continentDescription = description;
        return this;
    }

    withDungeons(dungeons: Dungeon[]){
        this.continentDungeons = this.continentDungeons.concat(dungeons);
        return this;
    }

}