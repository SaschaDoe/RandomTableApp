import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {
    addNewMonsterToStoreReturnDescription
} from "../../entites/monster/monsterStore";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {ArtefactTable} from "../artefactTables/artefactTable";

export class TransitionAdjectiveTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("open"))
        entries.push(new TableEntry("closed"))
        entries.push(new TableEntry("locked"))
        entries.push(new TableEntry("hidden behind").withCascadingRole(new ArtefactTable()))
        entries.push(new TableEntry("guarded:").withFunctionString(addNewMonsterToStoreReturnDescription))
        entries.push(new TableEntry("spilled"))
        entries.push(new TableEntry("walled up"))
        super(entries, TableTitles.TransitionAdjective);
        this.tableType = TableType.Location;
    }
}