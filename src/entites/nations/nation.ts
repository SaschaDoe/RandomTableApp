import {Entity} from "../entity";
import {SizeTable} from "../../tables/otherTables/sizeTable";
import {FractionWealthTable} from "../../tables/otherTables/fractionWealthTable";
import {NationResourceTable} from "../../tables/otherTables/nationResourceTable";
import {Culture} from "../cultures/culture";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";

export class Nation extends Entity{
    size = new SizeTable().roleWithCascade().text;
    wealth = new FractionWealthTable().roleWithCascade().text;
    resources = new NationResourceTable().roleWithCascade().text;
    culture = new Culture().toString();

    constructor() {
        let name = generateContinentName();
        super(name);
    }

    toString(){
        return `${this.name} a ${this.size} ${this.wealth} nation known for ${this.resources} and with the culture of ${this.culture.toString()}`
    }

}