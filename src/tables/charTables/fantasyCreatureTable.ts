import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {Animals} from "./animals";
import {TableTitles} from "../tableTitles";
import {FantasyCreatures} from "./fantasyCreatures";

export class FantasyCreatureTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry(FantasyCreatures.Orc).withRoleInterval(1,3));
        entries.push(new TableEntry(FantasyCreatures.Goblin).withRoleInterval(4,6));
        super(entries, TableTitles.FantasyCreatures);
    }
}