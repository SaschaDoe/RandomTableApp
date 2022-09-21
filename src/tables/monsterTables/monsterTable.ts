import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {AnimalTable} from "../charTables/animalTable";
import {SizeTable} from "../otherTables/sizeTable";
import {RarityTable} from "../otherTables/rarityTable";
import {FantasyCreatureTable} from "../charTables/fantasyCreatureTable";
import {SpecialFeaturesTable} from "../charTables/specialFeaturesTable";

export class MonsterTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new RarityTable())
            .withCascadingRole(new SpecialFeaturesTable())
            .withCascadingRole(new AnimalTable())
            .withCascadingRole(new AnimalTable()))
        entries.push(new TableEntry("")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new RarityTable())
            .withCascadingRole(new SpecialFeaturesTable())
            .withCascadingRole(new FantasyCreatureTable()))
        super(entries, TableTitles.Monster,TableType.Monster);
    }
}