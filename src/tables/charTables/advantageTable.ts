import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AttributeTable} from "./attributeTable";
import {SenseTable} from "./senseTable";
import type {Character} from "../../world/character";

export class AdvantageTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry("lucky"));
        entries.push(new TableEntry("respected"));
        entries.push(new TableEntry("famous"))
        entries.push(new TableEntry("high attribute ").withCascadingRole(new AttributeTable()))
        entries.push(new TableEntry("talent for"))
        entries.push(new TableEntry("better sense ").withCascadingRole(new SenseTable()))
        entries.push(new TableEntry("cold resistant"))
        entries.push(new TableEntry("heat resistant"))
        entries.push(new TableEntry("fey blood"))
        entries.push(new TableEntry("quick"))
        entries.push(new TableEntry("resistant against age"))
        entries.push(new TableEntry("dwarven nose"))
        entries.push(new TableEntry("hard bone"))
        entries.push(new TableEntry("magically incognito"))
        entries.push(new TableEntry("berserker"))
        entries.push(new TableEntry("regeneration"))
        entries.push(new TableEntry("good looking"))
        entries.push(new TableEntry("can remember much"))
        entries.push(new TableEntry("resistant against illness"))
        entries.push(new TableEntry("poison resistant"))
        super(entries, TableTitles.Advantages);
        this.functions.push(AddAdvantage)
        this.probability = 50;
        this.moreThanOnce = true;
    }
}
export function AddAdvantage(char: Character, entry: TableEntry){
    char.advantages.push(entry.text);
    return char;
}
