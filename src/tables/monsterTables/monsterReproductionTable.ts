import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class MonsterReproductionTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("sexual intercourse"))
        entries.push(new TableEntry("orgy"))
        entries.push(new TableEntry("lays eggs"))
        entries.push(new TableEntry("division"))
        entries.push(new TableEntry("self fertilization"))
        entries.push(new TableEntry("parasite"))
        entries.push(new TableEntry("not it is infertile"))
        entries.push(new TableEntry("eggs under water"))
        entries.push(new TableEntry("bag"))
        super(entries, TableTitles.MonsterReproduction,TableType.Character);
    }
}