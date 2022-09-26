import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class ProfaneTalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("riding"));
        entries.push(new TableEntry("hunting"));
        entries.push(new TableEntry("athletics"));
        entries.push(new TableEntry("climbing"));
        entries.push(new TableEntry("swimming"));
        entries.push(new TableEntry("persuading"));
        entries.push(new TableEntry("drinking"));
        entries.push(new TableEntry("writing"));
        //TODO AthleticsTable, Wisdom, CraftingTable
        super(entries, TableTitles.ProfaneTalent);
        this.tableType = TableType.Talent;
    }
}