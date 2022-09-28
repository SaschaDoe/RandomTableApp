import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {BeginningTropeTable} from "./beginningTropeTable";
import {
    addNewNSCToCharacterStoreReturnDescription,
    addNewNSCToCharacterStoreReturnUniqueName
} from "../../entites/character/charStore";
import {
    addDungeonToStoreReturnDescription,
    addDungeonToStoreReturnUniqueName
} from "../../entites/dungeons/dungeonStore";
import {
    addArtefactToStoreReturnDescription,
    addArtefactToStoreReturnUniqueName
} from "../../entites/artefacts/artefactStore";
import {
    addNewFractionToStoreReturnDescription,
    addNewFractionToStoreReturnUniqueName
} from "../../entites/fractions/fractionStore";
import {DiceRole} from "../diceRole";

export class AdventureBeginningTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withRoleInterval(2,7)
            .withCascadingRole(new BeginningTropeTable()));
        entries.push(new TableEntry("fraction introduction: ")
            .withRoleInterval(8,8)
            .withFunctionString(addNewFractionToStoreReturnDescription));
        entries.push(new TableEntry("dungeon introduction: ")
            .withRoleInterval(9,9)
            .withFunctionString(addDungeonToStoreReturnDescription));
        entries.push(new TableEntry("character introduction: ")
            .withRoleInterval(10,10)
            .withFunctionString(addNewNSCToCharacterStoreReturnDescription));
        entries.push(new TableEntry("artefact introduction: ")
            .withRoleInterval(11,12)
            .withFunctionString(addArtefactToStoreReturnDescription));
        super(entries, TableTitles.AdventureBeginning, TableType.Other, new DiceRole().withNumberOfDice(2));
    }
}