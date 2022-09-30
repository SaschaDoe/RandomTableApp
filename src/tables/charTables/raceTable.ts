import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import {FantasyCreatureTable} from "./fantasyCreatureTable";
import {TableType} from "../tableType";
import {DiceRole} from "../diceRole";


export class RaceTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("human")
            .withRoleInterval(3,12));
        entries.push(new TableEntry("")
            .withRoleInterval(13,14)
            .withCascadingRole(new FantasyCreatureTable()));
        entries.push(new TableEntry("half human half")
            .withRoleInterval(15,17)
            .withCascadingRole(new AnimalTable()));
        entries.push(new TableEntry("")
            .withRoleInterval(18,18)
            .withCascadingRole(new AnimalTable())
            .withCascadingRole(new AnimalTable()));
        super(entries, TableTitles.Race,TableType.Character, new DiceRole().withNumberOfDice(3));
    }
}