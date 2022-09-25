import {getId} from "./idGetter";

export class Entity{
    readonly id: number;
    readonly name: string;

    constructor(name: string)
     {
         this.name = name;
         this.id = getId();
     }

     getUniqueName(){
        return `${this.id} ${this.name}`;
     }
}