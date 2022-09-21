import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {RaceTable} from "../charTables/raceTable";
import {ElementTable} from "../otherTables/elementTable";
import {EmotionTable} from "../otherTables/emotionTable";
import {AttributeTable} from "../charTables/attributeTable";

export class MonsterMealTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("vegan"))
        entries.push(new TableEntry("vegetarian"))
        entries.push(new TableEntry("omnivores"))
        entries.push(new TableEntry("meat"))
        entries.push(new TableEntry("").withCascadingRole(new RaceTable()))
        entries.push(new TableEntry("").withCascadingRole(new ElementTable()))
        entries.push(new TableEntry("dreams"))
        entries.push(new TableEntry("it eats emotion: ").withCascadingRole(new EmotionTable()))
        entries.push(new TableEntry("it eats attribute: ").withCascadingRole(new AttributeTable()))
        super(entries, TableTitles.MonsterMeal,TableType.Character);
    }
}