import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {RaceTable} from "../charTables/raceTable";
import {Artefact} from "../../world/artefacts/artefact";
import {artefactStore} from "../../world/artefacts/artefactStore";
import {Character} from "../../world/character/character";
import {Dice} from "../../utils/dice";
import {characters} from "../../world/character/charStore";
import {WeatherTable} from "../otherTables/weatherTable";
import {addArtefactToStore} from "../artefactTables/magicalArtefactTable";

export class SummonTalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("summon").withCascadingRole(new RaceTable()))
        entries.push(new TableEntry("summon").withCascadingRole(new WeatherTable()))
        entries.push(new TableEntry("summon being of higher power").withFunction(addCharacter));
        entries.push(new TableEntry("summon artefact").withFunction(addArtefactToStore));
        super(entries, TableTitles.SummonTalent);
        this.tableType = TableType.Talent;
    }
}

export function addCharacter(){
    let character = new Character(new Dice(), true);
    characters.update(chars => {
        chars.push(character);
        return chars;
    })
    return character.getUniqueName();
}