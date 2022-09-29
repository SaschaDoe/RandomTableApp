import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class CultureTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(""))

        super(entries, TableTitles.Culture);
        this.tableType = TableType.Other;
    }
}