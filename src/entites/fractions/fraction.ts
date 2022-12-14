import {Entity} from "../entity";
import {generateFractionName} from "../../tables/nameTables/nameGenerator";
import {addNewNSCToCharacterStore} from "../character/charStore";
import type {Character} from "../character/character";
import {SizeTable} from "../../tables/otherTables/sizeTable";
import {FractionWealthTable} from "../../tables/otherTables/fractionWealthTable";
import {MotivationTable} from "../../tables/charTables/motivationTable";
import {Random} from "../../utils/randomUtils";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {addNewSignToStore} from "../signs/signStore";
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
    }

    toString(){
        return `${this.getUniqueName()} a ${this.size} ${this.alignment} fraction which ${this.wealth} and ${this.influence} influence associated with ${this.associatedTalent} and motivation ${this.motivation}. The sign is ${this.sign.toString()} \n The leader is: ${this.leader.toString()}.`
    }

}