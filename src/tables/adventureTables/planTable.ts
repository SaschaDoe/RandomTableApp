import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class PlanTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("take over the world"))
        entries.push(new TableEntry("unspoken plan guarantee"))
        entries.push(new TableEntry("xanatos plan"))
        entries.push(new TableEntry("speed gambit"))
        entries.push(new TableEntry("luck plan"))
        entries.push(new TableEntry("batman gambit"))
        entries.push(new TableEntry("kansas city shuffle"))
        entries.push(new TableEntry("failure gambit"))
        entries.push(new TableEntry("playing both sides"))
        super(entries, TableTitles.Plan);
        this.tableType = TableType.Other;
    }
}