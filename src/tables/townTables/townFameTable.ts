import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {ArtefactTable} from "../artefactTables/artefactTable";
import {createNSC} from "../../world/character/characterFactory";
import {TownEventTable} from "./townEventTable";
import {BuildingTable} from "../locationTables/buildingTable";

export class TownFameTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("quality of product").withCascadingRole(new ArtefactTable()));
        entries.push(new TableEntry("famous home town of").withFunctionString(createNSC));
        entries.push(new TableEntry("famous town event:").withCascadingRole(new TownEventTable()));
        entries.push(new TableEntry("unknown"));
        entries.push(new TableEntry("sleepy nest"));
        entries.push(new TableEntry("very clean"));
        entries.push(new TableEntry("good inns"));
        entries.push(new TableEntry("very dirty"));
        entries.push(new TableEntry("beautiful decorated"));
        entries.push(new TableEntry("fraction house"));
        entries.push(new TableEntry("bad inns"));
        entries.push(new TableEntry("way is because of fraction dangerous"));
        entries.push(new TableEntry("way is because of nature dangerous"));
        entries.push(new TableEntry("famous building").withCascadingRole(new BuildingTable()));
        super(entries, TableTitles.TownFame);
        this.tableType = TableType.Town;
    }
}