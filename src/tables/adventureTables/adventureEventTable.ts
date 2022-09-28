import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {getTrope} from "../../adventureEventList/eventList";
import {DiceRole} from "../diceRole";

export class AdventureEventTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withFunctionString(getTrope));
        super(entries, TableTitles.AdventureEvent, TableType.Other, new DiceRole().withNumberOfDice(2));
    }
}




