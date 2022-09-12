import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";

export class GenderTable extends Table {
    constructor() {
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("Female")
            .withRoleInterval(1, 3));
        entries.push(new TableEntry("Male")
            .withRoleInterval(4, 6));
        super(entries,TableTitles.Gender)
    }
}