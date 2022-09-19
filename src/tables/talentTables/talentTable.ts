import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {TalentCategoryTable} from "./talentCategoryTable";
import {ElementalTalentTable} from "./elementalTalentTable";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";
import {TargetTalentTable} from "./targetTalentTable";

export class TalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new TargetTalentTable())
            .withCascadingRole(new TalentCategoryTable())
            .withCascadingRole(new ElementalTalentTable()))
        super(entries, TableTitles.Talent);
        this.tableType = TableType.Talent;
        this.probability = 30;
        this.moreThanOnce = true;
        this.functions.push(addTalent)
    }
}

function addTalent(char: Character, roleResult: RoleResult){
    char.talents.push(roleResult.text);
    return char;
}

