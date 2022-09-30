import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {
    addArtefactToStoreReturnDescription,
} from "../../entites/artefacts/artefactStore";

export class MagicalArtefactTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("").withFunctionString(addArtefactToStoreReturnDescription))
        super(entries, TableTitles.MagicalArtefact);
        this.tableType = TableType.Artefact;
    }
}

