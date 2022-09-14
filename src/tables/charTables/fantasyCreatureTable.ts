import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {FantasyCreatures} from "./fantasyCreatures";
import {AlterRace} from "./raceTable";

export class FantasyCreatureTable extends Table{
    constructor(){
        let entries = [];
        entries.push(new TableEntry(FantasyCreatures.Orc));
        entries.push(new TableEntry(FantasyCreatures.Goblin));
        entries.push(new TableEntry("elf"));
        entries.push(new TableEntry("fey"));
        entries.push(new TableEntry("high elf"));
        entries.push(new TableEntry("cobol"));
        entries.push(new TableEntry("giant"));
        entries.push(new TableEntry("titan"));
        entries.push(new TableEntry("troll"));
        entries.push(new TableEntry("ogre"));
        entries.push(new TableEntry("neckar"));
        entries.push(new TableEntry("mermaid"));
        entries.push(new TableEntry("yeti"));
        entries.push(new TableEntry("schrat"));
        entries.push(new TableEntry("gene"));
        entries.push(new TableEntry("element"));
        entries.push(new TableEntry("angel"));
        entries.push(new TableEntry("demon"));
        entries.push(new TableEntry("chimera"));
        entries.push(new TableEntry("klabautermann"));
        entries.push(new TableEntry("golem"));
        entries.push(new TableEntry("construct"));
        entries.push(new TableEntry("gnom"));
        entries.push(new TableEntry("orb"));
        entries.push(new TableEntry("living artefact "));
        super(entries, TableTitles.FantasyCreatures);
        this.functions.push(AlterRace)
    }
}