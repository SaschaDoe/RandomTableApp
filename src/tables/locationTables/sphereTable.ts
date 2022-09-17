import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {ElementTable} from "../otherTables/elementTable";

export class SphereTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("death"))
        entries.push(new TableEntry("fey"))
        entries.push(new TableEntry("divine"))
        entries.push(new TableEntry("cosmic"))
        entries.push(new TableEntry("hell"))
        entries.push(new TableEntry("void"))
        entries.push(new TableEntry("hidden paths"))
        entries.push(new TableEntry("associated with").withCascadingRole(new ElementTable()))
        super(entries, TableTitles.Sphere);
        this.tableType = TableType.Location;
    }
}