import {Continent} from "./continent";
import type {Dungeon} from "../dungeons/dungeon";
import type {Nation} from "../nations/nation";

export class ContinentBuilder{
    continentName: string|undefined;
    continentId = -1;
    continentDescription: string|undefined;
    continentDungeons: Dungeon[] = [];
    continentSpheres: string[] = [];
    nations: Nation[] = [];

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

    withSpheres(spheres: string[]){
        this.continentSpheres = this.continentSpheres.concat(spheres);
        return this;
    }

    withNations(nations: Nation[]){
        this.nations = this.nations.concat(nations);
        return this;
    }

}