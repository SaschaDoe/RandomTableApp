import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class FurnishingTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("altar"))
        entries.push(new TableEntry("table"))
        entries.push(new TableEntry("wall hanging"))
        entries.push(new TableEntry("picture"))
        entries.push(new TableEntry("bed"))
        entries.push(new TableEntry("kitchen"))
        entries.push(new TableEntry("storage"))
        entries.push(new TableEntry("laboratory"))
        super(entries, TableTitles.Furnishing);
        this.tableType = TableType.Location;
    }
}