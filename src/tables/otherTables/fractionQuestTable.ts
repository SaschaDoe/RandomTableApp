import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import { addNewMonsterToStoreReturnUniqueName} from "../../entites/monster/monsterStore";
import {addNewNSCToCharacterStoreReturnUniqueName} from "../../entites/character/charStore";
import {addArtefactToStoreReturnUniqueName} from "../../entites/artefacts/artefactStore";

export class FractionQuestTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("kill ")
            .withFunctionString(addNewMonsterToStoreReturnUniqueName))
        entries.push(new TableEntry("kill ")
            .withFunctionString(addNewNSCToCharacterStoreReturnUniqueName))
        entries.push(new TableEntry("bring ")
            .withFunctionString(addNewNSCToCharacterStoreReturnUniqueName))
        entries.push(new TableEntry("bring ")
            .withFunctionString(addNewMonsterToStoreReturnUniqueName))
        entries.push(new TableEntry("bring ")
            .withFunctionString(addArtefactToStoreReturnUniqueName))
        super(entries, TableTitles.FractionQuest);
        this.tableType = TableType.Other;
    }
}