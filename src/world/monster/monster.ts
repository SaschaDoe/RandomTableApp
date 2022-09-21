import {AttributeEntity} from "../character/attributeEntity";
import {generateName} from "../../tables/nameTables/nameGenerator";
import {MonsterAdjectiveTable} from "../../tables/monsterTables/monsterAdjectiveTable";
import {MonsterMealTable} from "../../tables/monsterTables/monsterMealTable";
import {MonsterNumberTable} from "../../tables/monsterTables/monsterNumberTable";
import {MonsterEncounterTypeTable} from "../../tables/monsterTables/monsterEncounterTypeTable";
import {MonsterReproductionTable} from "../../tables/monsterTables/monsterReproductionTable";
import {MotivationTable} from "../../tables/charTables/motivationTable";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {MagicalTalentTable} from "../../tables/talentTables/magicalTalentTable";
import {TreasureTable} from "../../tables/artefactTables/treasureTable";
import {MonsterTable} from "../../tables/monsterTables/monsterTable";
import {CurseTable} from "../../tables/charTables/curseTable";

export class Monster extends AttributeEntity{
    name: string;
    description: string;
    adjective: string;
    meal: string;
    number: string;
    encounterType: string;
    reproduction: string;
    talents: string[];
    treasures: string[];
    motivation: string;
    curses: string[];

    constructor() {
        super();
        this.name = generateName(4);
        this.description = new MonsterTable().roleWithCascade().text;
        this.adjective = new MonsterAdjectiveTable().roleWithCascade().text;
        this.meal = new MonsterMealTable().roleWithCascade().text;
        this.number = new MonsterNumberTable().roleWithCascade().text;
        this.encounterType = new MonsterEncounterTypeTable().roleWithCascade().text;
        this.reproduction = new MonsterReproductionTable().roleWithCascade().text;
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.talents = [];
        this.treasures = [];
        let numberOfTalents = randomIntFromInterval(0,2);
        for(let i = 0; i < numberOfTalents; i++){
            this.talents.push(new MagicalTalentTable().roleWithCascade().text);
        }
        let numberOfTreasures = randomIntFromInterval(0,2);
        for(let i = 0; i < numberOfTreasures; i++){
            this.treasures.push(new TreasureTable().roleWithCascade().text);
        }
        this.curses = []
        let numberOfCurses = randomIntFromInterval(-2,2);
        for(let i = 0; i < numberOfCurses; i++){
            this.curses.push(new CurseTable().roleWithCascade().text);
        }
    }
}