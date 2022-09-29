import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class QuantifierTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("very little"))
        entries.push(new TableEntry("few"))
        entries.push(new TableEntry("normal amount"))
        entries.push(new TableEntry("much/many"))
        entries.push(new TableEntry("very much/many"))
        super(entries, TableTitles.Quantifier);
        this.tableType = TableType.Other;
    }
}