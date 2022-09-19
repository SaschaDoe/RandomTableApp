import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import {FantasyCreatureTable} from "./fantasyCreatureTable";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";
import {TableType} from "../tableType";
import {DiceRole} from "../diceRole";


export class RaceTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("human")
            .withRoleInterval(2,7));
        entries.push(new TableEntry("")
            .withRoleInterval(8,9)
            .withCascadingRole(new FantasyCreatureTable()));
        entries.push(new TableEntry("half human half")
            .withRoleInterval(10,11)
            .withCascadingRole(new AnimalTable()));
        entries.push(new TableEntry("")
            .withRoleInterval(12,12)
            .withCascadingRole(new AnimalTable())
            .withCascadingRole(new AnimalTable()));
        super(entries, TableTitles.Race,TableType.Character, new DiceRole().withNumberOfDice(2));
        this.functions.push(changeRace)
    }
}

export function changeRace(char: Character, roleResult: RoleResult){
    char.race = roleResult.text;
    return char;
}