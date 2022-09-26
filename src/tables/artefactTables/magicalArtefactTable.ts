import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {
    addArtefactToStoreReturnUniqueName,
} from "../../entites/artefacts/artefactStore";

export class MagicalArtefactTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("").withFunctionString(addArtefactToStoreReturnUniqueName))
        super(entries, TableTitles.MagicalArtefact);
        this.tableType = TableType.Artefact;
    }
}

