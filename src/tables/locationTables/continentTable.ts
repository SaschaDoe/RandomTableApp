import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";

export class ContinentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("normal"))
        entries.push(new TableEntry("hear"))
        entries.push(new TableEntry("feel"))
        entries.push(new TableEntry("taste"))
        entries.push(new TableEntry("smell"))
        super(entries, TableTitles.Senses);
    }
}