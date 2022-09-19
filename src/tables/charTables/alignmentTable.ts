import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import type {Character} from "../../world/character/character";
import {AttitudeTable} from "./attitudeTable";
import type {RoleResult} from "../roleResult";

export class AlignmentTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry("lawful ").withCascadingRole(new AttitudeTable()));
        entries.push(new TableEntry("neutral").withCascadingRole(new AttitudeTable()));
        entries.push(new TableEntry("chaotic ").withCascadingRole(new AttitudeTable()));
        super(entries, TableTitles.Alignment);
        this.functions.push(addAlignment)
    }
}
export function addAlignment(char: Character, roleResult: RoleResult){
    char.alignment = roleResult.text
    return char;
}
