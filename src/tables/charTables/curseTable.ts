import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import type {Character} from "../../world/character";
import {DisadvantageTable} from "./disadvantageTable";


export class CurseTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("vampire", 1));
        entries.push(new TableEntry("undead", 2));
        entries.push(new TableEntry("ghost", 3));
        entries.push(new TableEntry("wer", 4).withCascadingRole(new AnimalTable()));
        entries.push(new TableEntry("death prophecy", 5));
        entries.push(new TableEntry("disadvantage: ", 6).withCascadingRole(new DisadvantageTable()));
        super(entries, TableTitles.Curse);
        this.functions.push(AddCurse)
    }
}

export function AddCurse(char: Character, entry: TableEntry){
    char.curses.push(entry.text);
    return char;
}