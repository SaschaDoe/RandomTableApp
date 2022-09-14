import {Races} from "../tables/charTables/races";
import {Dice} from "../utils/dice";
import {DiceRole} from "../tables/diceRole";
import {GermanMaleNameTable} from "../tables/charTables/germanMaleNameTable";
import {GenderTable} from "../tables/charTables/genderTable";
import {GermanFemaleNameTable} from "../tables/charTables/germanFemaleNameTable";
import {GetId} from "./idGetter";
import {Gender} from "../tables/charTables/gender";
import type {Relationship} from "./relationship";
import {MotivationTable} from "../tables/charTables/motivationTable";
import {RaceTable} from "../tables/charTables/raceTable";

export class Character{
    name : string;
    race : string;
    gender : string;
    disadvantages : string[];
    id: number;
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

    constructor(race = Races.Human, dice = new Dice()) {
        this.id = GetId();
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.disadvantages = [];
        this.relationships = [];
        this.curses = [];
        this.gender = new GenderTable().role().text
        if(this.gender === Gender.Female){
            this.name = new GermanFemaleNameTable().role().text;
        }else{
            this.name = new GermanMaleNameTable().role().text;
        }
        this.race = new RaceTable().roleWithCascade().text
        this.roleForAttributes(dice);
    }


    getUniqueName(){
        return this.id+" "+this.name;
    }

    private roleForAttributes(dice: Dice) {
        let attributeDiceRole = new DiceRole().numberOfDice(3);

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