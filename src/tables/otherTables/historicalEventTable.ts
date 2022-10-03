import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {NaturalEvents} from "./naturalEvents";
import {chooseHigherPowerReturnUniqueName} from "../../entites/character/charStore";

export class HistoricalEventTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("battle between fractions"))//.withFunctionString(chooseTwoFractionFromStoreWithUniqueName))
        entries.push(new TableEntry("contract between fractions"))//.withFunctionString(chooseTwoFractionFromStoreWithUniqueName))
        entries.push(new TableEntry("new ruler"))//.withFunctionString(chooseNSCReturnUniqueName))
        entries.push(new TableEntry("").withCascadingRole(new NaturalEvents()))
        entries.push(new TableEntry("scientific discovery"))
        entries.push(new TableEntry("destruction town"))
        entries.push(new TableEntry("destruction fraction"))//.withFunctionString(chooseFractionFromStoreReturnUniqueName))
        entries.push(new TableEntry("new fraction"))//.withFunctionString(addNewFractionToStoreReturnUniqueName))
        entries.push(new TableEntry("conquest of town"))
        entries.push(new TableEntry("supernatural intervention").withFunctionString(chooseHigherPowerReturnUniqueName))
        entries.push(new TableEntry("illness"))
        super(entries, TableTitles.HistoricalEvent);
        this.tableType = TableType.Other;
    }
}