import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {Races} from "./races";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import {FantasyCreatureTable} from "./fantasyCreatureTable";
import type {Character} from "../../world/character";


export class RaceTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(Races.Human)
            .withRoleInterval(1,3));
        entries.push(new TableEntry(Races.HalfHuman)
            .withRoleInterval(4,5)
            .withCascadingRole(new AnimalTable()));
        entries.push(new TableEntry(Races.FantasyCreature)
            .withRoleInterval(6,6)
            .withCascadingRole(new FantasyCreatureTable()));
        super(entries, TableTitles.Race);
        this.functions.push(AlterRace)
    }
}

export function AlterRace(char: Character, entry: TableEntry){
    char.race = entry.text;
    return char;
}