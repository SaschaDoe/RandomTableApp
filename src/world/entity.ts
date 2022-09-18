import {GetId} from "./idGetter";

export class Entity{
    name: string;
    id: number;

    constructor(name = "") {
        this.name = name;
        this.id = GetId();
    }

    getUniqueName(){
        return this.id+" "+this.name;
    }
}