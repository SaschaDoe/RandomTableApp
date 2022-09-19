import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {BodyPartsTable} from "../otherTables/bodyPartsTable";
import {AttitudeTable} from "../charTables/attitudeTable";
import {RaceTable} from "../charTables/raceTable";
import {TalentTable} from "./talentTable";

export class ChangeTalent extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("change height of").withCascadingRole(new BodyPartsTable()))
        entries.push(new TableEntry("change weight of").withCascadingRole(new BodyPartsTable()))
        entries.push(new TableEntry("change speed of").withCascadingRole(new BodyPartsTable()))
        entries.push(new TableEntry("better").withCascadingRole(new AttitudeTable()))
        entries.push(new TableEntry("worse").withCascadingRole(new AttitudeTable()))
        entries.push(new TableEntry("transformation into").withCascadingRole(new RaceTable()))
        entries.push(new TableEntry("gain ability to").withCascadingRole(new TalentTable()))
        entries.push(new TableEntry("invisibility"))
        entries.push(new TableEntry("not destroyable"))
        super(entries, TableTitles.ChangeTalent);
        this.tableType = TableType.Talent;
    }
}