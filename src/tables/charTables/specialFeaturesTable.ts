import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {ElementTable} from "../otherTables/elementTable";
import {BodyPartsTable} from "../otherTables/bodyPartsTable";
import {randomNumber} from "../monsterTables/monsterNumberTable";
import {DiceRole} from "../diceRole";
import type {Character} from "../../world/character/character";
import type {RoleResult} from "../roleResult";

export class SpecialFeaturesTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("glowing eyes"))
        entries.push(new TableEntry("smoking nostrils"))
        entries.push(new TableEntry("very loud"))
        entries.push(new TableEntry("loud breathing"))
        entries.push(new TableEntry("very fury"))
        entries.push(new TableEntry("thorns"))
        entries.push(new TableEntry("horns"))
        entries.push(new TableEntry("quick"))
        entries.push(new TableEntry("")
            .withFunctionString(randomNumber)
            .with(" extra ")
            .withCascadingRole(new BodyPartsTable()))
        entries.push(new TableEntry("")
            .withCascadingRole(new ElementTable())
            .withCascadingRole(new BodyPartsTable()))
        super(entries,
            TableTitles.SpecialFeatures,
            TableType.Character,
            new DiceRole(),
            10,
            true);
        this.functions.push(addSpecialFeature)
    }
}
export function addSpecialFeature(char: Character, roleResult: RoleResult){
    char.specialFeature = roleResult.text
    return char;
}