import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {ProfessionTable} from "../charTables/professionTable";
import {NaturalEvents} from "../otherTables/naturalEvents";
import {addNSCToCharacterStore} from "../../entites/character/charStore";

export class TownEventTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("jousting tournament"))
        entries.push(new TableEntry("race"))
        entries.push(new TableEntry("sports tournament"))
        entries.push(new TableEntry("election"))
        entries.push(new TableEntry("coronation"))
        entries.push(new TableEntry("fair"))
        entries.push(new TableEntry("religious festival"))
        entries.push(new TableEntry("bard contest"))
        entries.push(new TableEntry("science meeting"))
        entries.push(new TableEntry("wizard convent"))
        entries.push(new TableEntry("exhibition"))
        entries.push(new TableEntry("").withCascadingRole(new NaturalEvents()))
        entries.push(new TableEntry("harvest"))
        entries.push(new TableEntry("military exercise"))
        entries.push(new TableEntry("procession"))
        entries.push(new TableEntry("beauty contest"))
        entries.push(new TableEntry("museum"))
        entries.push(new TableEntry("theater"))
        entries.push(new TableEntry("child of the king is born"))
        entries.push(new TableEntry("execution of").withFunctionString(addNSCToCharacterStore))
        entries.push(new TableEntry("").withCascadingRole(new ProfessionTable()).with(" festival"))
        super(entries, TableTitles.TownEvent);
        this.tableType = TableType.Town;
    }
}