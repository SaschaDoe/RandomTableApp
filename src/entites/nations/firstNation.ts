import {NationAdjectiveTable} from "../../tables/nationTables/nationAdjectiveTable";
import {SizeTable} from "../../tables/otherTables/sizeTable";
import {addRulerToStore} from "../character/charStore";
import {HistoricalEventTable} from "../../tables/otherTables/historicalEventTable";
import {FractionWealthTable} from "../../tables/otherTables/fractionWealthTable";
import {TechnologyTable} from "../../tables/otherTables/technologyTable";
import {Entity} from "../entity";
import {generateContinentName, getCultureName} from "../../tables/nameTables/nameGenerator";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {NationTable} from "../../tables/nationTables/nationTable";
import {RealCultureTable} from "../../tables/cultureTables/realCultureTable";
import type {Character} from "../character/character";
import {Gender} from "../../tables/charTables/gender";

export class FirstNation extends Entity{
    adjectives = [] as string[];
    size = "";
    ruler: Character|undefined;
    pastEvent  = "";
    futureEvent = "";
    wealth = "";
    technology = "";
    type = "";
    relationships = [] as [FirstNation, string][];
    culture = "";

    constructor() {
        let type = new NationTable().roleWithCascade().text;
        let culture = new RealCultureTable().roleWithCascade().text;
        let name = type + " " + getCultureName(culture, Gender.Male);
        super(name);
        this.type = type;
        let randomAdjectiveNumber = randomIntFromInterval(1,2);
        for(let i = 0; i < randomAdjectiveNumber; i++){
            this.adjectives.push(new NationAdjectiveTable().roleWithCascade().text);
        }
        this.culture = culture;
        this.size = new SizeTable().roleWithCascade().text;
        this.wealth = new FractionWealthTable().roleWithCascade().text;
        this.technology = new TechnologyTable().roleWithCascade().text;
    }

    initializeNation(){
        this.ruler = addRulerToStore();
        this.pastEvent = new HistoricalEventTable().roleWithCascade().text
        this.futureEvent = new HistoricalEventTable().roleWithCascade().text;
    }

    toString(){
        let rulerDescription = "";
        if(this.ruler === undefined){
            rulerDescription = "there is no ruler";
        }else{
            rulerDescription = this.ruler.toString();
        }
        let description = `a `;
        for(let i = 0; i < this.adjectives.length; i++){
            description += `${this.adjectives[i]} `
        }
        description += `${this.size} ${this.wealth} ${this.culture}-like culture ${this.type} on the level of ${this.technology}. \n`;
        description += `Ruler is ${rulerDescription}. \n`;
        for(let i = 0; i < this.relationships.length; i++){
            description += `Relationship with ${this.relationships[i][0].getUniqueName()} is ${this.relationships[i][1]}.\n`
        }
        return description;
    }
}