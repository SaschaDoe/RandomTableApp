import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {Disadvantages} from "./disadvantages";
import {Character} from "../../world/character";
import {Relationship} from "../../world/relationship";
import {RelationshipType} from "../../world/relationshipType";
import {AttributeTable} from "./attributeTable";
import {SenseTable} from "./senseTable";

export class DisadvantageTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry(Disadvantages.Unlucky));
        entries.push(new TableEntry(Disadvantages.Power).withFunction(AddCharForPower));
        entries.push(new TableEntry("fat"))
        entries.push(new TableEntry("rumors"))
        entries.push(new TableEntry("outcast"))
        entries.push(new TableEntry("shy"))
        entries.push(new TableEntry("low attribute ").withCascadingRole(new AttributeTable()))
        entries.push(new TableEntry("untalented"))
        entries.push(new TableEntry("bad sense ").withCascadingRole(new SenseTable()))
        entries.push(new TableEntry("blind"))
        entries.push(new TableEntry("deaf"))
        entries.push(new TableEntry("vulnerable to cold"))
        entries.push(new TableEntry("vulnerable to heat"))
        entries.push(new TableEntry("no sense of magic"))
        entries.push(new TableEntry("no sense of money"))
        entries.push(new TableEntry("naive"))
        entries.push(new TableEntry("slow"))
        entries.push(new TableEntry("ugly"))
        entries.push(new TableEntry("old"))
        entries.push(new TableEntry("long sleeper"))
        entries.push(new TableEntry("bleeder"))
        entries.push(new TableEntry("bones of glass"))
        entries.push(new TableEntry("hot tempered"))
        entries.push(new TableEntry("wanted"))
        entries.push(new TableEntry("mad"))
        entries.push(new TableEntry("ill"))
        super(entries, TableTitles.Disadvantages);
        this.functions.push(AddDisadvantage)
        this.probability = 50;
        this.moreThanOnce = true;
    }
}
export function AddDisadvantage(char: Character, entry: TableEntry){
    char.disadvantages.push(entry.text);
    return char;
}
export function AddCharForPower(char: Character){
    let newChar = new Character();
    let relationship = new Relationship(char, newChar, RelationshipType.Obedient, RelationshipType.Acquaintanceship);
    newChar.relationships.push(relationship);
    char.relationships.push(relationship);
    return newChar;
}
