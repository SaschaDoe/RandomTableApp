import {NationAdjectiveTable} from "../../tables/nationTables/nationAdjectiveTable";
import {SizeTable} from "../../tables/otherTables/sizeTable";
import {addNewNSCToCharacterStore, addNSCToCharacterStore} from "../character/charStore";
import {HistoricalEventTable} from "../../tables/otherTables/historicalEventTable";
import {FractionWealthTable} from "../../tables/otherTables/fractionWealthTable";
import {TechnologyTable} from "../../tables/otherTables/technologyTable";
import {Entity} from "../entity";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {NationTable} from "../../tables/nationTables/nationTable";

export class Nation extends Entity{
    adjectives = [] as string[];
    size = new SizeTable().roleWithCascade().text;
    ruler = addNewNSCToCharacterStore();
    pastEvent = new HistoricalEventTable().roleWithCascade().text
    futureEvent = new HistoricalEventTable().roleWithCascade().text;
    wealth = new FractionWealthTable().roleWithCascade().text;
    technology = new TechnologyTable().roleWithCascade().text;
    type = new NationTable().roleWithCascade().text;
    relationships = [] as [Nation, string][]

    constructor() {
        let name = generateContinentName();
        super(name);
        let randomAdjectiveNumber = randomIntFromInterval(1,2);
        for(let i = 0; i < randomAdjectiveNumber; i++){
            this.adjectives.push(new NationAdjectiveTable().roleWithCascade().text);
        }
    }

    toString(){
        let description = `${this.getUniqueName()} a `;
        for(let i = 0; i < this.adjectives.length; i++){
            description += `${this.adjectives[i]} `
        }
        description += `${this.size} ${this.wealth} ${this.type} on the level of ${this.technology}. \n`;
        description += `Ruler is ${this.ruler.toString()}. \n`;
        description += `Past event was ${this.pastEvent}. \n`;
        description += `Future event will be ${this.futureEvent}. \n`;
        for(let i = 0; i < this.relationships.length; i++){
            description += `Relationship with ${this.relationships[i][0].getUniqueName()} is ${this.relationships[i][1]}.\n`
        }
        return description;
    }
}