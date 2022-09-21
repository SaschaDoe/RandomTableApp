import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class TrapTriggerTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("manuel"))
        entries.push(new TableEntry("robe"))
        entries.push(new TableEntry("button"))
        entries.push(new TableEntry("loose hatch"))
        entries.push(new TableEntry("fire"))
        entries.push(new TableEntry("robe on sleeping monster"))
        entries.push(new TableEntry("needs no trigger"))
        super(entries, TableTitles.TrapTrigger);
        this.tableType = TableType.Location;
    }
}