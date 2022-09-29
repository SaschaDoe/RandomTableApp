import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";

export class MealTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("pizza"))
        entries.push(new TableEntry("cake"))
        entries.push(new TableEntry("roast pork"))
        entries.push(new TableEntry("salmon"))
        entries.push(new TableEntry("salad"))
        entries.push(new TableEntry("cheese plate"))
        entries.push(new TableEntry("pancake"))
        super(entries, TableTitles.Meal);
        this.tableType = TableType.Other;
    }
}