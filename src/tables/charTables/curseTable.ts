import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import type {Character} from "../../world/character/character";
import {DisadvantageTable} from "./disadvantageTable";
import type {RoleResult} from "../roleResult";
import {ElementTable} from "../otherTables/elementTable";


export class CurseTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("vampire vulnerable to").withCascadingRole(new ElementTable()));
        entries.push(new TableEntry("undead"));
        entries.push(new TableEntry("ghost"));
        entries.push(new TableEntry("wer").withCascadingRole(new AnimalTable()));
        entries.push(new TableEntry("death prophecy"));
        entries.push(new TableEntry("disadvantage: ").withCascadingRole(new DisadvantageTable()));
        super(entries, TableTitles.Curse);
        this.functions.push(addCurse);
        this.probability = 5;
    }
}

export function addCurse(char: Character, roleResult: RoleResult){
    char.curses.push(roleResult.text);
    return char;
}