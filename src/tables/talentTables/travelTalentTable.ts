import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {MonsterTable} from "../monsterTables/monsterTable";
import {addMonsterToStore} from "../../world/monster/monsterStore";

export class TravelTalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("portal to location"))
        entries.push(new TableEntry("portal to sphere"))
        entries.push(new TableEntry("travel to location"))
        entries.push(new TableEntry("travel to sphere"))
        entries.push(new TableEntry("create permanent way"))
        entries.push(new TableEntry("summon mount").withFunctionString(addMonsterToStore))
        entries.push(new TableEntry("summon messenger").withFunctionString(addMonsterToStore))
        entries.push(new TableEntry("teleport fast and many times to near places"))

        super(entries, TableTitles.TravelTalent);
        this.tableType = TableType.Talent;
    }
}