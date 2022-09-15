import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import type {Character} from "../../world/character";
import {AttitudeTable} from "./attitudeTable";

export class AlignmentTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry("lawful ").withCascadingRole(new AttitudeTable()));
        entries.push(new TableEntry("neutral").withCascadingRole(new AttitudeTable()));
        entries.push(new TableEntry("chaotic ").withCascadingRole(new AttitudeTable()));
        super(entries, TableTitles.Alignment);
        this.functions.push(AddAlignment)
    }
}
export function AddAlignment(char: Character, entry: TableEntry){
    char.alignment = entry.text
    return char;
}
