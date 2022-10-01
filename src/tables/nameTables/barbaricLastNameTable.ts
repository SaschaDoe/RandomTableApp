import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {BarbaricFemaleNameTable} from "./barbaricFemaleNameTable";

export class BarbaricLastNameTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(""))
        entries.push(new TableEntry("bren").withCascadingRole(new BarbaricFemaleNameTable()))
        super(entries, TableTitles.BarbaricLastName);
        this.tableType = TableType.Other;
    }
}