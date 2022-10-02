import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {
    addNewNSCToCharacterStoreReturnUniqueName, chooseHigherPowerReturnDescription
} from "../../entites/character/charStore";
import {addNewFractionToStoreReturnUniqueName} from "../../entites/fractions/fractionStore";
import {addArtefactToStoreReturnUniqueName} from "../../entites/artefacts/artefactStore";
import {addDungeonToStoreReturnUniqueName} from "../../entites/dungeons/dungeonStore";
import {addNewMonsterToStoreReturnUniqueName} from "../../entites/monster/monsterStore";

export class PlotTropeTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("15 minutes of fame"));
        entries.push(new TableEntry("something bad happened long time ago"));
        entries.push(new TableEntry("something bad happened yesterday"));
        entries.push(new TableEntry("mistakenly unlawful/ clear my name"));
        entries.push(new TableEntry("mistakenly held unlawful"));
        entries.push(new TableEntry("accidental hero"));
        entries.push(new TableEntry("save the world from evil"));
        entries.push(new TableEntry("quest is in reality for evil"));
        entries.push(new TableEntry("against the expected role"));
        entries.push(new TableEntry("adventure rebuff"));
        entries.push(new TableEntry("expected treasure turns out to be worthless"));
        entries.push(new TableEntry("alien invasion"));
        entries.push(new TableEntry("evil army at the gates"));
        entries.push(new TableEntry("dragon"));
        entries.push(new TableEntry("heist"));
        entries.push(new TableEntry("get love"));
        entries.push(new TableEntry("villain tries to marry someone"));
        entries.push(new TableEntry("annoying patient"));
        entries.push(new TableEntry("antagonist feels sorry for heroes death"));
        entries.push(new TableEntry("paranoia"));
        entries.push(new TableEntry("appease the volcano god"));
        entries.push(new TableEntry("boring alternative"));
        entries.push(new TableEntry("the B grade"));
        entries.push(new TableEntry("back to ... (school)"));
        entries.push(new TableEntry("bad luck charm"));
        entries.push(new TableEntry("someone seems good but than bad"));
        entries.push(new TableEntry("the plot is just copied from:")); //todo add very famous plots like titanic, pokahontas, lord of rings, matrix,
        entries.push(new TableEntry("competition with character: ").withFunctionString(addNewNSCToCharacterStoreReturnUniqueName));
        entries.push(new TableEntry("competition with fraction: ").withFunctionString(addNewFractionToStoreReturnUniqueName));
        entries.push(new TableEntry("macGuffin chase: ").withFunctionString(addArtefactToStoreReturnUniqueName));
        entries.push(new TableEntry("brainwashed"));
        entries.push(new TableEntry("breakout"));
        entries.push(new TableEntry("helping others to breakout"));
        entries.push(new TableEntry("get back what is yours"));
        entries.push(new TableEntry("clear my name"));
        entries.push(new TableEntry("danger with deadline"));
        entries.push(new TableEntry("deadly bet"));
        entries.push(new TableEntry("die hard situation"));
        entries.push(new TableEntry("mystery plot"));
        entries.push(new TableEntry("evil plan"));
        entries.push(new TableEntry("faustian rebellion"));
        entries.push(new TableEntry("lie towering"));
        entries.push(new TableEntry("fight to survive"));
        entries.push(new TableEntry("field trip to the past"));
        entries.push(new TableEntry("fighting for home"));
        entries.push(new TableEntry("one last job"));
        entries.push(new TableEntry("the game never stopped"));
        entries.push(new TableEntry("ghost story"));
        entries.push(new TableEntry("... for a day"));
        entries.push(new TableEntry("hell on earth"));
        entries.push(new TableEntry("hollywood formula"));
        entries.push(new TableEntry("heroic destiny discovery"));
        entries.push(new TableEntry("the inspector is coming"));
        entries.push(new TableEntry("its personal now"));
        entries.push(new TableEntry("super sayajin"));
        entries.push(new TableEntry("just fine without someone (it isn't)"));
        entries.push(new TableEntry("killing for a tissue sample"));
        entries.push(new TableEntry("leave your test quest"));
        entries.push(new TableEntry("heroes are leaders now"));
        entries.push(new TableEntry("too late, or not?"));
        entries.push(new TableEntry("loan shark"));
        entries.push(new TableEntry("long game"));
        entries.push(new TableEntry("lost wedding ring"));
        entries.push(new TableEntry("lotus eater machine"));
        entries.push(new TableEntry("love triangle"));
        entries.push(new TableEntry("made a slave"));
        entries.push(new TableEntry("magic comes back"));
        entries.push(new TableEntry("magic goes away"));
        entries.push(new TableEntry("the makeover"));
        entries.push(new TableEntry("mental story"));
        entries.push(new TableEntry("mission from higher power:").withFunctionString(chooseHigherPowerReturnDescription));
        entries.push(new TableEntry("hero can't ordinary must"));
        entries.push(new TableEntry("moby dick whale chase"));
        entries.push(new TableEntry("you have to be worthy"));
        entries.push(new TableEntry("new superpower"));
        entries.push(new TableEntry("new location"));
        entries.push(new TableEntry("no antagonist plot"));
        entries.push(new TableEntry("noahs story arc"));
        entries.push(new TableEntry("agatha christy plot"));
        entries.push(new TableEntry("an offer you can't refuse"));
        entries.push(new TableEntry("cure something plot"));
        entries.push(new TableEntry("evil paradise"));
        entries.push(new TableEntry("pride before the fall"));
        entries.push(new TableEntry("prevent the war"));
        entries.push(new TableEntry("protect the house"));
        entries.push(new TableEntry("quest for a wish"));
        entries.push(new TableEntry("a race"));
        entries.push(new TableEntry("in reality not an adult"));
        entries.push(new TableEntry("rear window witness"));
        entries.push(new TableEntry("rightful king returns"));
        entries.push(new TableEntry("read trip"));
        entries.push(new TableEntry("serial killer"));
        entries.push(new TableEntry("the easy plan"));
        entries.push(new TableEntry("sorceres apprentice plot"));
        entries.push(new TableEntry("spot the impostor"));
        entries.push(new TableEntry("succession crisis"));
        entries.push(new TableEntry("superhero origin"));
        entries.push(new TableEntry("whats inside plot"));
        entries.push(new TableEntry("one crazy night"));
        entries.push(new TableEntry("physical therapy plot"));
        entries.push(new TableEntry("plot driven secret"));
        entries.push(new TableEntry("monster is in reality good:").withFunctionString(addNewMonsterToStoreReturnUniqueName));
        entries.push(new TableEntry("defeating cheating opponent: ").withFunctionString(addNewNSCToCharacterStoreReturnUniqueName));
        entries.push(new TableEntry("exploration plot for dungeon: ").withFunctionString(addDungeonToStoreReturnUniqueName));
        entries.push(new TableEntry("exploration plot for monster: ").withFunctionString(addNewMonsterToStoreReturnUniqueName));
        super(entries, TableTitles.PlotTrope);
        this.tableType = TableType.Artefact;
    }
}