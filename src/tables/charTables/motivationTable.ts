import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import type {Character} from "../../world/character";
import {DiceRole} from "../diceRole";
import {TableTitles} from "../tableTitles";
import {DisadvantageTable} from "./disadvantageTable";
import {AttributeTable} from "./attributeTable";
import {TableType} from "../tableType";
import type {RoleResult} from "../roleResult";


export class MotivationTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("revenge"));
        entries.push(new TableEntry("find happiness"));
        entries.push(new TableEntry("altruism"));
        entries.push(new TableEntry("prophecy"));
        entries.push(new TableEntry("against prophecy"));
        entries.push(new TableEntry("because someone was good"));
        entries.push(new TableEntry("carrier"));
        entries.push(new TableEntry("to prove it to everyone"));
        entries.push(new TableEntry("help against"));
        entries.push(new TableEntry("cheap concept"));
        entries.push(new TableEntry("reproduction"));
        entries.push(new TableEntry("debt"));
        entries.push(new TableEntry("protect"));
        entries.push(new TableEntry("search meaning"));
        entries.push(new TableEntry("despotism"));
        entries.push(new TableEntry("envy"));
        entries.push(new TableEntry("political policy"));
        entries.push(new TableEntry("perfection"));
        entries.push(new TableEntry("babysitter"));
        entries.push(new TableEntry("change world"));
        entries.push(new TableEntry("has not managed something once"));
        entries.push(new TableEntry("freudian excuse"));
        entries.push(new TableEntry("justice"));
        entries.push(new TableEntry("science"));
        entries.push(new TableEntry("chaos"));
        entries.push(new TableEntry("fun"));
        entries.push(new TableEntry("eros"));
        entries.push(new TableEntry("agape"));
        entries.push(new TableEntry("philia"));
        entries.push(new TableEntry("family"));
        entries.push(new TableEntry("xenia"));
        entries.push(new TableEntry("honour"));
        entries.push(new TableEntry("fame"));
        entries.push(new TableEntry("survive"));
        entries.push(new TableEntry("settle"));
        entries.push(new TableEntry("higher char attribute ").withCascadingRole(new AttributeTable()));
        entries.push(new TableEntry("role model"));
        entries.push(new TableEntry("be normal"));
        entries.push(new TableEntry("owe someone"));
        entries.push(new TableEntry("change/become more gender"));
        entries.push(new TableEntry("provoked"));
        entries.push(new TableEntry("legacy"));
        entries.push(new TableEntry("greed"));
        entries.push(new TableEntry("mc guffin chase"));
        entries.push(new TableEntry("task"));
        entries.push(new TableEntry("fear"));
        entries.push(new TableEntry("lust"));
        entries.push(new TableEntry("peer pressure"));
        entries.push(new TableEntry("no motivation anymore in").withSelfCascade());
        entries.push(new TableEntry("boring"));
        entries.push(new TableEntry("get rid of disadvantage ").withCascadingRole(new DisadvantageTable()));
        super(entries, TableTitles.Motivation,TableType.Character,new DiceRole().withNumberOfRoles(3));
        this.functions.push(changeMotivation)
    }
}

export function changeMotivation(char: Character, roleResult: RoleResult){
    char.motivation = roleResult.text;
    return char;
}