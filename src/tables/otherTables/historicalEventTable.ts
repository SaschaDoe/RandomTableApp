import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {createNSC} from "../../world/character/characterFactory";
import {NaturalEvents} from "./naturalEvents";

export class HistoricalEventTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("battle between fractions"))
        entries.push(new TableEntry("contract between fractions"))
        entries.push(new TableEntry("new ruler").withFunctionString(createNSC))
        entries.push(new TableEntry("").withCascadingRole(new NaturalEvents()))
        entries.push(new TableEntry("science"))
        entries.push(new TableEntry("destruction town or fraction"))
        entries.push(new TableEntry("conquest of town or fraction"))
        entries.push(new TableEntry("supernatural intervention"))
        entries.push(new TableEntry("illness"))
        super(entries, TableTitles.HistoricalEvent);
        this.tableType = TableType.Other;
    }
}