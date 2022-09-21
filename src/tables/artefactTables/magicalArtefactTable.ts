import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {Artefact} from "../../world/artefacts/artefact";
import {artefactStore} from "../../world/artefacts/artefactStore";

export class MagicalArtefactTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("").withFunctionString(addArtefactToStore))
        super(entries, TableTitles.MagicalArtefact);
        this.tableType = TableType.Artefact;
    }


}

export function addArtefactToStore(){
    let artefact = new Artefact(true);
    artefactStore.update(artefacts => {
        artefacts.push(artefact);
        return artefacts;
    })
    return artefact.getUniqueName() + artefact.description;
}

export function getNewArtefactInStore(){
    let artefact = new Artefact(true);
    artefactStore.update(artefacts => {
        artefacts.push(artefact);
        return artefacts;
    })
    return artefact;
}