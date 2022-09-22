import {getId} from "./idGetter";

export class Entity{
    name: string;
    description: string;
    id: number;

    constructor(name = "", description = "") {
        this.name = name;
        this.description = description;
        this.id = getId();
    }

    getDescription(){
        return this.description;
    }

    getUniqueName(){
        if(this.name === ""){
            return "Other: "+this.id;
        }
        return this.id+" "+this.name;
    }
}