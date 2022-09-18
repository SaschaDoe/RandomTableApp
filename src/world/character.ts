import {Dice} from "../utils/dice";
import {DiceRole} from "../tables/diceRole";
import {GermanMaleNameTable} from "../tables/nameTables/germanMaleNameTable";
import {GenderTable} from "../tables/charTables/genderTable";
import {GermanFemaleNameTable} from "../tables/nameTables/germanFemaleNameTable";
import {Gender} from "../tables/charTables/gender";
import type {Relationship} from "./relationship";
import {MotivationTable} from "../tables/charTables/motivationTable";
import {RaceTable} from "../tables/charTables/raceTable";
import {NobilityTable} from "../tables/charTables/nobilityTable";
import {ProfessionTable} from "../tables/charTables/professionTable";
import {AlignmentTable} from "../tables/charTables/alignmentTable";
import {mapSiteWithChar} from "./continentFactory";
import type {Site} from "./site";
import {Entity} from "./entity";


export class Character extends Entity{
    race : string;
    gender : string;
    disadvantages : string[];
    motivation : string;

    courage = 0;
    charisma = 0;
    wisdom  = 0;
    intuition  = 0
    dexterity  = 0;
    manualDexterity = 0;
    constitution = 0;
    strength = 0;

    relationships: Relationship[];
    curses: string[];
    nobility: string;
    profession: string;
    advantages: string[];
    alignment: string;

    homeContinent: Site;

    constructor(dice = new Dice()) {
        let name = "";
        let gender = new GenderTable().role().text
        if(gender === Gender.Female){
            name = new GermanFemaleNameTable().role().text;
        }else{
            name = new GermanMaleNameTable().role().text;
        }
        super(name);
        this.gender = gender;
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.nobility = new NobilityTable().role().text;
        this.profession = new ProfessionTable().roleWithCascade().text;
        this.disadvantages = [];
        this.advantages = [];
        this.relationships = [];
        this.curses = [];
        this.homeContinent = mapSiteWithChar(dice);
        this.alignment = new AlignmentTable().roleWithCascade().text;
        this.race = new RaceTable().roleWithCascade().text
        this.roleForAttributes(dice);
    }

    private roleForAttributes(dice: Dice) {
        let attributeDiceRole = new DiceRole().withNumberOfDice(3);

        this.courage = dice.role(attributeDiceRole);
        this.charisma = dice.role(attributeDiceRole);
        this.wisdom = dice.role(attributeDiceRole);
        this.intuition = dice.role(attributeDiceRole);
        this.dexterity = dice.role(attributeDiceRole);
        this.manualDexterity = dice.role(attributeDiceRole);
        this.constitution = dice.role(attributeDiceRole);
        this.strength = dice.role(attributeDiceRole);
    }

}

