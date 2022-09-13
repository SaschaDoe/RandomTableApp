import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {Races} from "./races";
import {TableTitles} from "../tableTitles";
import {AnimalTable} from "./animalTable";
import {FantasyCreatureTable} from "./fantasyCreatureTable";
import type {Character} from "../../world/character";
import {DiceRole} from "../diceRole";
import {AddDisadvantage} from "./disadvantageTable";


export class MotivationTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("revenge",111));
        entries.push(new TableEntry("find happiness",112));
        entries.push(new TableEntry("altruism",113));
        entries.push(new TableEntry("prophecy",114));
        entries.push(new TableEntry("against prophecy",115));
        entries.push(new TableEntry("because someone was good",116));
        entries.push(new TableEntry("carrier",121));
        entries.push(new TableEntry("to prove it to everyone",122));
        entries.push(new TableEntry("help against",123));
        entries.push(new TableEntry("cheap concept",124));
        entries.push(new TableEntry("reproduction",125));
        entries.push(new TableEntry("debt",126));
        entries.push(new TableEntry("protect",131));
        entries.push(new TableEntry("search meaning",132));
        entries.push(new TableEntry("despotism",133));
        entries.push(new TableEntry("envy",134));
        entries.push(new TableEntry("political policy",135));
        entries.push(new TableEntry("perfection",136));
        entries.push(new TableEntry("babysitter",141));
        entries.push(new TableEntry("change world",142));
        entries.push(new TableEntry("has not managed something once",143));
        entries.push(new TableEntry("freudian excuse",144));
        entries.push(new TableEntry("justice",145));
        entries.push(new TableEntry("science",146));
        entries.push(new TableEntry("chaos",151));
        entries.push(new TableEntry("fun",152));
        entries.push(new TableEntry("eros",153));
        entries.push(new TableEntry("agape",154));
        entries.push(new TableEntry("philia",155));
        entries.push(new TableEntry("family",156));
        entries.push(new TableEntry("xenia",161));
        entries.push(new TableEntry("honour",162));
        entries.push(new TableEntry("fame",163));
        entries.push(new TableEntry("survive",164));
        entries.push(new TableEntry("settle",165));
        entries.push(new TableEntry("higher char attribute",166));
        entries.push(new TableEntry("role model",211));
        entries.push(new TableEntry("be normal",212));
        entries.push(new TableEntry("owe someone",213));
        entries.push(new TableEntry("change/become more gender",214));
        entries.push(new TableEntry("provoked",215));
        entries.push(new TableEntry("legacy",216));
        entries.push(new TableEntry("greed",221));
        entries.push(new TableEntry("mc guffin chase",222));
        entries.push(new TableEntry("task",223));
        entries.push(new TableEntry("fear",224));
        entries.push(new TableEntry("lust",225));
        entries.push(new TableEntry("peer pressure",226));
        entries.push(new TableEntry("no motivation in something anymore",231));
        entries.push(new TableEntry("boring",232));
        entries.push(new TableEntry("get rid of disadvantage",233));
        super(entries, TableTitles.Motivation,new DiceRole().withNumberOfRoles(3));
        this.functions.push(AlterMotivation)
    }
}

export function AlterMotivation(char: Character, entry: TableEntry){
    char.motivation = entry.text;
    return char;
}