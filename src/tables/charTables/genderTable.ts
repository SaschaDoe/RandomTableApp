import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {Gender} from "./gender";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";
import {DiceRole} from "../diceRole";

export class GenderTable extends Table {
    constructor() {
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(Gender.Hermaphrodite)
            .withRoleInterval(3, 3));
        entries.push(new TableEntry(Gender.Female)
            .withRoleInterval(4, 9));
        entries.push(new TableEntry(Gender.Male)
            .withRoleInterval(10, 17));
        entries.push(new TableEntry(Gender.Genderless)
            .withRoleInterval(18, 18));
        super(entries,TableTitles.Gender)
        this.functions.push(changeGender)
        this.diceRole = new DiceRole().withNumberOfDice(3);
    }
}

function changeGender(char: Character, roleResult: RoleResult){
    char.gender = roleResult.text;
    return char;
}