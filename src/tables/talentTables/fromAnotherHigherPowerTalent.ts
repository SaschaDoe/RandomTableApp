import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {createHigherPower} from "../../world/character/characterFactory";
import {ArtefactTable} from "../artefactTables/artefactTable";

export class FromAnotherHigherPowerTalent extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("pact with").withFunctionString(createHigherPower))
        entries.push(new TableEntry("ground of").withFunctionString(createHigherPower))
        entries.push(new TableEntry("summoning helpers of").withFunctionString(createHigherPower))
        entries.push(new TableEntry("summoning")
            //.withCascadingRole(new ArtefactTable()) TODO magical Artefact
            .withFunctionString(createHigherPower))
        entries.push(new TableEntry("dialogue with").withFunctionString(createHigherPower))
        entries.push(new TableEntry("transport to domain of").withFunctionString(createHigherPower))
        entries.push(new TableEntry("protection against").withFunctionString(createHigherPower))
        super(entries, TableTitles.TalentFromHigherPower);
        this.tableType = TableType.Talent;
    }
}