import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {MagicalTalentTable} from "./magicalTalentTable";

export class TalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new MagicalTalentTable()))
        super(entries, TableTitles.Talent);
        this.tableType = TableType.Talent;
        this.probability = 30;
        this.moreThanOnce = true;
    }
}

