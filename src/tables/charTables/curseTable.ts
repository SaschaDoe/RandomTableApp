import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import type {Character} from "../../world/character/character";
import {DisadvantageTable} from "./disadvantageTable";
import type {RoleResult} from "../roleResult";


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
        this.functions.push(addCurse);
        this.probability = 5;
    }
}

export function addCurse(char: Character, roleResult: RoleResult){
    char.curses.push(roleResult.text);
    return char;
}