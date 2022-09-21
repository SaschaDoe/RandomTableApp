import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {WeaponTable} from "../artefactTables/weaponTable";
import {ElementTable} from "../otherTables/elementTable";
import {NaturalObstacleTable} from "./naturalObstacleTable";
import {MagicalTalentTable} from "../talentTables/magicalTalentTable";
import {BodyPartsTable} from "../otherTables/bodyPartsTable";
import {addMonsterToStore} from "../../world/monster/monsterStore";

export class TrapFunctionTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("hatch"))
        entries.push(new TableEntry("pit"))
        entries.push(new TableEntry("pit with").withCascadingRole(new WeaponTable()))
        entries.push(new TableEntry("pit with").withCascadingRole(new ElementTable()))
        entries.push(new TableEntry("rolling stone"))
        entries.push(new TableEntry("swinging").withCascadingRole(new WeaponTable()))
        entries.push(new TableEntry("").withCascadingRole(new ElementTable()))
        entries.push(new TableEntry("").withCascadingRole(new NaturalObstacleTable()))
        entries.push(new TableEntry("monster on leash").withFunctionString(addMonsterToStore))
        entries.push(new TableEntry("monster in cage").withFunctionString(addMonsterToStore))
        entries.push(new TableEntry("monster in pit").withFunctionString(addMonsterToStore))
        entries.push(new TableEntry("").withCascadingRole(new MagicalTalentTable()))
        entries.push(new TableEntry("rope around").withCascadingRole(new BodyPartsTable()))
        entries.push(new TableEntry("cage"))
        super(entries, TableTitles.TrapFunction);
        this.tableType = TableType.Location;
    }
}