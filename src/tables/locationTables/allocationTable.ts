import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {DiceRole} from "../diceRole";

export class AllocationTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("one room").withRoleInterval(1,2))
        entries.push(new TableEntry("few big rooms").withRoleInterval(3,7))
        entries.push(new TableEntry("small and big rooms with floors").withRoleInterval(8,13))
        entries.push(new TableEntry("many small rooms").withRoleInterval(14,17))
        entries.push(new TableEntry("mainly floors").withRoleInterval(18,18))
        super(entries,
            TableTitles.Allocation,
            TableType.Location,
            new DiceRole().withNumberOfDice(3));
    }
}