import {Continent} from "./continent";

export class ContinentBuilder{
    continentName: string|undefined;
    continentId = -1;

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
}