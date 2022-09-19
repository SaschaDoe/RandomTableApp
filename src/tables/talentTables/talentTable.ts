import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";
import {MagicalTalentTable} from "./magicalTalentTable";

export class TalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new MagicalTalentTable()))
        super(entries, TableTitles.Talent);
        this.tableType = TableType.Talent;
        this.probability = 30;
        this.moreThanOnce = true;
        this.functions.push(addTalent)
    }
}

export function addTalent(char: Character, roleResult: RoleResult){
    char.talents.push(roleResult.text);
    return char;
}

