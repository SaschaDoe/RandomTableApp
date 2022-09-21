import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AttributeTable} from "./attributeTable";
import {SenseTable} from "../otherTables/senseTable";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";
import {ElementTable} from "../otherTables/elementTable";
import {addArtefactToStore} from "../artefactTables/magicalArtefactTable";
import {Artefact} from "../../world/artefacts/artefact";
import {TalentTable} from "../talentTables/talentTable";
import {TableType} from "../tableType";

export class AdvantageTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry("lucky"));
        entries.push(new TableEntry("respected"));
        entries.push(new TableEntry("famous"))
        entries.push(new TableEntry("high attribute").withCascadingRole(new AttributeTable()))
        entries.push(new TableEntry("talent for").withCascadingRole(new TalentTable()))
        entries.push(new TableEntry("better sense").withCascadingRole(new SenseTable()))
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
        entries.push(new TableEntry("resistant to").withCascadingRole(new ElementTable()))
        entries.push(new TableEntry("mighty artefact").withFunctionString(addArtefactToStore))
        super(entries, TableTitles.Advantages);
        this.functions.push(addAdvantage)
        this.probability = 50;
        this.moreThanOnce = true;
        this.tableType = TableType.Character;
    }
}
export function addAdvantage(char: Character, roleResult: RoleResult){
    char.advantages.push(roleResult.text);
    return char;
}