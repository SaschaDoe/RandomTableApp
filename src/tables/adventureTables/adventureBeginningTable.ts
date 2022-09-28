import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {BeginningTropeTable} from "./beginningTropeTable";
import {addNewNSCToCharacterStoreReturnUniqueName} from "../../entites/character/charStore";
import {addDungeonToStoreReturnUniqueName} from "../../entites/dungeons/dungeonStore";
import {addArtefactToStoreReturnUniqueName} from "../../entites/artefacts/artefactStore";
import {addNewFractionToStoreReturnUniqueName} from "../../entites/fractions/fractionStore";
import {DiceRole} from "../diceRole";

export class AdventureBeginningTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withRoleInterval(2,7)
            .withCascadingRole(new BeginningTropeTable()));
        entries.push(new TableEntry("fraction introduction: ")
            .withRoleInterval(8,8)
            .withFunctionString(addNewFractionToStoreReturnUniqueName));
        entries.push(new TableEntry("dungeon introduction: ")
            .withRoleInterval(9,9)
            .withFunctionString(addDungeonToStoreReturnUniqueName));
        entries.push(new TableEntry("character introduction: ")
            .withRoleInterval(10,10)
            .withFunctionString(addNewNSCToCharacterStoreReturnUniqueName));
        entries.push(new TableEntry("artefact introduction: ")
            .withRoleInterval(11,12)
            .withFunctionString(addArtefactToStoreReturnUniqueName));
        super(entries, TableTitles.AdventureBeginning, TableType.Other, new DiceRole().withNumberOfDice(2));
    }
}