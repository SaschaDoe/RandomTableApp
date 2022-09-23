import {getId} from "./idGetter";

export class Entity{
    id: number;

    constructor()
     {this.id = getId();}
}