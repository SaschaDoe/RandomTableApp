import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {createHigherPower} from "../../world/character/characterFactory";

export class FromAnotherHigherPowerTalent extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("pact with").with(createHigherPower()))
        entries.push(new TableEntry("ground of").with(createHigherPower()))
        entries.push(new TableEntry("summoning helpers of").with(createHigherPower()))
        entries.push(new TableEntry("dialogue with").with(createHigherPower()))
        entries.push(new TableEntry("transport to domain of").with(createHigherPower()))
        entries.push(new TableEntry("protection against").with(createHigherPower()))
        super(entries, TableTitles.TalentFromHigherPower);
        this.tableType = TableType.Talent;
    }
}