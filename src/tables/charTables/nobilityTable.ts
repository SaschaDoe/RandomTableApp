import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import type {Character} from "../../world/character";
import {DiceRole} from "../diceRole";

export class NobilityTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("high nobel").withRoleInterval(1,1))
        entries.push(new TableEntry("nobel").withRoleInterval(2,3))
        entries.push(new TableEntry("privileged free").withRoleInterval(4,5))
        entries.push(new TableEntry("free").withRoleInterval(6,8))
        entries.push(new TableEntry("dutiful free").withRoleInterval(9,12))
        entries.push(new TableEntry("serf").withRoleInterval(13,16))
        entries.push(new TableEntry("slave").withRoleInterval(17,18))
        super(entries, TableTitles.Nobility, new DiceRole().withNumberOfDice(3));
        this.functions.push(ChangeNobility)
    }
}

export function ChangeNobility(char: Character, entry: TableEntry){
    char.nobility = entry.text;
    return char;
}