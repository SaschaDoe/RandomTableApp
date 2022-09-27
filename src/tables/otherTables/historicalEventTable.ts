import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {NaturalEvents} from "./naturalEvents";
import {addNewNSCToCharacterStoreReturnUniqueName} from "../../entites/character/charStore";
import {
    addNewFractionToStoreReturnUniqueName,
    chooseFractionFromStoreWithUniqueName
} from "../../entites/fractions/fractionStore";

export class HistoricalEventTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("battle between fractions").withFunctionString(chooseFractionFromStoreWithUniqueName))
        entries.push(new TableEntry("contract between fractions").withFunctionString(chooseFractionFromStoreWithUniqueName))
        entries.push(new TableEntry("new ruler").withFunctionString(addNewNSCToCharacterStoreReturnUniqueName))
        entries.push(new TableEntry("").withCascadingRole(new NaturalEvents()))
        entries.push(new TableEntry("scientific discovery"))
        entries.push(new TableEntry("destruction town"))
        entries.push(new TableEntry("destruction fraction").withFunctionString(addNewFractionToStoreReturnUniqueName))
        entries.push(new TableEntry("conquest of town"))
        entries.push(new TableEntry("supernatural intervention"))
        entries.push(new TableEntry("illness"))
        super(entries, TableTitles.HistoricalEvent);
        this.tableType = TableType.Other;
    }
}