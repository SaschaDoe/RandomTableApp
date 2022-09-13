import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {Animals} from "./animals";
import {TableTitles} from "../tableTitles";
import {AlterRace} from "./raceTable";

export class AnimalTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry(Animals.Goat).withRoleInterval(1,6));
        super(entries, TableTitles.Animal);
        this.functions.push(AlterRace)

    }
}