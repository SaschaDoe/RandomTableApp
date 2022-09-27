import {Entity} from "../entity";
import {generateFractionName} from "../../tables/nameTables/nameGenerator";
import {addNewNSCToCharacterStore} from "../character/charStore";
import type {Character} from "../character/character";
import {SizeTable} from "../../tables/otherTables/sizeTable";
import {FractionWealthTable} from "../../tables/otherTables/fractionWealthTable";
import {MotivationTable} from "../../tables/charTables/motivationTable";
import {Random} from "../../utils/randomUtils";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {addNewSignToStore, addSignToStore} from "../signs/signStore";
import type {Sign} from "../signs/sign";
import {AlignmentTable} from "../../tables/charTables/alignmentTable";

export class Fraction extends Entity{
    leader: Character;
    members: Character[];
    size: string;
    influence: string;
    wealth: string;
    motivation: string;
    quests: string[];
    associatedTalent: string;
    sign: Sign;
    alignment: string;

    constructor() {
        let name = generateFractionName();
        super(name)
        this.alignment = new AlignmentTable().roleWithCascade().text;
        this.sign = addNewSignToStore();
        this.leader = addNewNSCToCharacterStore();
        this.size = new SizeTable().roleWithCascade().text;
        this.influence = new SizeTable().roleWithCascade().text;
        this.wealth = new FractionWealthTable().roleWithCascade().text;
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.associatedTalent = new TalentTable().roleWithCascade().text;
        this.quests = [];
        this.members = [];
            let randomNumberOfMembers = new Random().intFromInterval(1,3);
        for(let i = 0; i < randomNumberOfMembers; i++){
            this.members.push(addNewNSCToCharacterStore());
        }
    }

}