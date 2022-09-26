import {getId} from "./idGetter";

export class Entity{
    readonly id: number;
    readonly name: string;

    constructor(name: string, id = -1)
     {
         this.name = name;
         if(id === -1){
             this.id = getId();
         }else{
             this.id = id;
         }
     }

     getUniqueName(){
        return `${this.id} ${this.name}`;
     }
}