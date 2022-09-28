import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {ClimacticTropeTable} from "./climacticTrope";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {addNewNSCToCharacterStoreReturnDescription} from "../../entites/character/charStore";
import {addArtefactToStoreReturnDescription} from "../../entites/artefacts/artefactStore";
import {addNewFractionToStoreReturnDescription} from "../../entites/fractions/fractionStore";

export class AdventureRisingTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new ClimacticTropeTable()));
        entries.push(new TableEntry("introduce character:")
            .withFunctionString(addNewNSCToCharacterStoreReturnDescription));
        entries.push(new TableEntry("introduce artefact:")
            .withFunctionString(addArtefactToStoreReturnDescription));
        entries.push(new TableEntry("introduce fraction:")
            .withFunctionString(addNewFractionToStoreReturnDescription));
        super(entries, TableTitles.AdventureRising);
        this.tableType = TableType.Other;
    }
}