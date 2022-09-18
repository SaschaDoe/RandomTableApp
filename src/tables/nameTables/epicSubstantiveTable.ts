import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {WeaponTable} from "../artefactTables/weaponTable";
import {ElementTable} from "../otherTables/elementTable";

export class EpicSubstantiveTable extends Table {
    constructor() {
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("storm"));
        entries.push(new TableEntry("death"));
        entries.push(new TableEntry("temper"));
        entries.push(new TableEntry("hope"));
        entries.push(new TableEntry("").withCascadingRole(new ElementTable()));
        entries.push(new TableEntry("").withCascadingRole(new WeaponTable()));
        super(entries, TableTitles.EpicSubstantive);
    }
}