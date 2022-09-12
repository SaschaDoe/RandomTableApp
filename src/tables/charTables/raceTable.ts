import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {Races} from "./races";
import {TableTitles} from "../tableTitles";


export class RaceTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(Races.Human)
            .withRoleInterval(1,3));
        entries.push(new TableEntry(Races.HalfHuman)
            .withRoleInterval(4,5));
        entries.push(new TableEntry(Races.FantasyCreature)
            .withRoleInterval(6,6));
        super(entries, TableTitles.Race);
    }
}