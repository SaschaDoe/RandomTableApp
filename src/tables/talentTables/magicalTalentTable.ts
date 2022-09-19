import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TalentCategoryTable} from "./talentCategoryTable";
import {ElementalTalentTable} from "./elementalTalentTable";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {addTalent} from "./talentTable";
import {ChangeTalentTable} from "./changeTalentTable";
import {FromAnotherHigherPowerTalent} from "./fromAnotherHigherPowerTalent";

export class MagicalTalentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("")
            .withCascadingRole(new TalentCategoryTable())
            .withCascadingRole(new ChangeTalentTable()))
        entries.push(new TableEntry("")
            .withCascadingRole(new TalentCategoryTable())
            .withCascadingRole(new ElementalTalentTable()))
        entries.push(new TableEntry("")
            .withCascadingRole(new TalentCategoryTable())
            .withCascadingRole(new FromAnotherHigherPowerTalent()))
        super(entries, TableTitles.MagicalTalent);
        this.tableType = TableType.Talent;
        this.probability = 30;
        this.moreThanOnce = true;
        this.functions.push(addTalent)
    }
}