import {FirstNation} from "./firstNation";

export class Nation extends FirstNation{
    constructor() {
        super();
        this.initializeNation();
    }

    toString(){
        let rulerDescription = "";
        if(this.ruler === undefined){
            rulerDescription = "there is no ruler";
        }else{
            rulerDescription = this.ruler.getUniqueName();
        }
        let description = `${this.getUniqueName()} a `;
        for(let i = 0; i < this.adjectives.length; i++){
            description += `${this.adjectives[i]} `
        }
        description += `${this.size} ${this.wealth} ${this.culture}-like culture ${this.type} on the level of ${this.technology}. \n`;
        description += `Ruler is ${rulerDescription}. \n`;
        description += `Past event was ${this.pastEvent}. \n`;
        description += `Future event will be ${this.futureEvent}. \n`;
        for(let i = 0; i < this.relationships.length; i++){
            description += `Relationship with ${this.relationships[i][0].getUniqueName()} is ${this.relationships[i][1]}.\n`
        }
        return description;
    }
}