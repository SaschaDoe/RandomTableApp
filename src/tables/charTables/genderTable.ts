import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {Gender} from "./gender";
import type {Character} from "../../world/character";
import {AlterName} from "./germanMaleNameTable";

export class GenderTable extends Table {
    constructor() {
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(Gender.Female)
            .withRoleInterval(1, 3));
        entries.push(new TableEntry(Gender.Male)
            .withRoleInterval(4, 6));
        super(entries,TableTitles.Gender)
        this.functions.push(AlterName)
    }
}

function AlterGender(char: Character, entry: TableEntry){
    char.gender = entry.text;
    return char;
}