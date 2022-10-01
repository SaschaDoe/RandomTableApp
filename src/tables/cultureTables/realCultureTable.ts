import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class RealCultureTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("italian"))
        entries.push(new TableEntry("german"))
        entries.push(new TableEntry("french"))
        entries.push(new TableEntry("nordic"))
        entries.push(new TableEntry("spanish"))
        entries.push(new TableEntry("african"))
        entries.push(new TableEntry("maya"))
        entries.push(new TableEntry("chinese"))
        entries.push(new TableEntry("japan"))
        entries.push(new TableEntry("indian"))
        entries.push(new TableEntry("eskimo"))
        entries.push(new TableEntry("russia"))
        entries.push(new TableEntry("slavic"))
        entries.push(new TableEntry("persian"))
        entries.push(new TableEntry("arabic"))
        entries.push(new TableEntry("jewish"))
        entries.push(new TableEntry("barbarian"))
        entries.push(new TableEntry("southAmerican"))
        entries.push(new TableEntry("northAmerican"))
        entries.push(new TableEntry("").withSelfCascade().withSelfCascade())
        super(entries,
            TableTitles.RealCulture,
            TableType.Other);
    }
}