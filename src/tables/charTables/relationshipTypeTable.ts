import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {RelationshipType} from "../../world/relationshipType";


export class RelationshipTypeTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry(RelationshipType.Love,1));
        entries.push(new TableEntry(RelationshipType.Friendship,2));
        entries.push(new TableEntry(RelationshipType.Acquaintanceship,3));
        entries.push(new TableEntry(RelationshipType.Obedient,4));
        entries.push(new TableEntry(RelationshipType.Hatred,5));
        entries.push(new TableEntry(RelationshipType.ArchEnemy,6));

        super(entries, TableTitles.RelationshipType);
    }
}
