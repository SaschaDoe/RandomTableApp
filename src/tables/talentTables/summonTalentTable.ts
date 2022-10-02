import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {RaceTable} from "../charTables/raceTable";
import {WeatherTable} from "../otherTables/weatherTable";
import {addArtefactToStoreReturnUniqueName} from "../../entites/artefacts/artefactStore";
import {chooseHigherPowerReturnDescription} from "../../entites/character/charStore";

export class SummonTalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("summon").withCascadingRole(new RaceTable()))
        entries.push(new TableEntry("summon").withCascadingRole(new WeatherTable()))
        entries.push(new TableEntry("summon").withFunctionString(chooseHigherPowerReturnDescription))
        entries.push(new TableEntry("summon artefact").withFunctionString(addArtefactToStoreReturnUniqueName));
        super(entries, TableTitles.SummonTalent);
        this.tableType = TableType.Talent;
    }
}