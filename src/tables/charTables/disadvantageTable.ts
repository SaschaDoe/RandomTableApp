import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {Disadvantages} from "./disadvantages";
import {Character} from "../../world/character";
import {Relationship} from "../../world/relationship";
import {RelationshipType} from "../../world/relationshipType";

export class DisadvantageTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry(Disadvantages.Unlucky).withRoleInterval(1,1));
        entries.push(new TableEntry(Disadvantages.Power).withRoleInterval(2,6).withFunction(AddCharForPower));
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
