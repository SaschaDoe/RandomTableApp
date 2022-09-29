import {AttributeEntity} from "../character/attributeEntity";
import {generateName} from "../../tables/nameTables/nameGenerator";
import {MonsterAdjectiveTable} from "../../tables/monsterTables/monsterAdjectiveTable";
import {MonsterMealTable} from "../../tables/monsterTables/monsterMealTable";
import {MonsterReproductionTable} from "../../tables/monsterTables/monsterReproductionTable";
import {MotivationTable} from "../../tables/charTables/motivationTable";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {MagicalTalentTable} from "../../tables/talentTables/magicalTalentTable";
import {TreasureTable} from "../../tables/artefactTables/treasureTable";
import {MonsterTable} from "../../tables/monsterTables/monsterTable";
import {CurseTable} from "../../tables/charTables/curseTable";
import {GenderTable} from "../../tables/charTables/genderTable";
import {AdvantageTable} from "../../tables/charTables/advantageTable";
import {DisadvantageTable} from "../../tables/charTables/disadvantageTable";
import type {Table} from "../../tables/table";

export class Monster extends AttributeEntity{
    gender: string;
    description: string;
    adjective: string;
    meal: string;
    reproduction: string;
    talents: string[];
    treasures: string[];
    motivation: string;
    curses: string[];
    advantages: string[];
    disadvantages: string[];

    constructor() {
        let name = generateName(4);
        super(name);
        this.gender = new GenderTable().roleWithCascade().text;
        this.description = new MonsterTable().roleWithCascade().text;
        this.adjective = new MonsterAdjectiveTable().roleWithCascade().text;
        this.meal = new MonsterMealTable().roleWithCascade().text;
        this.reproduction = new MonsterReproductionTable().roleWithCascade().text;
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.talents = [];
        this.treasures = [];
        this.curses = [];
        this.advantages = [];
        this.disadvantages = [];

        this.addRandomProperty(0,2,new MagicalTalentTable(),this.talents);
        this.addRandomProperty(0,2,new TreasureTable(),this.treasures);
        this.addRandomProperty(-2,2,new CurseTable(),this.curses);
        this.addRandomProperty(-2,2,new AdvantageTable(),this.advantages);
        this.addRandomProperty(-2,2,new DisadvantageTable(),this.disadvantages);
    }

    private addRandomProperty(min: number, max: number, table: Table, property: string[]) {
        let numberOfTalents = randomIntFromInterval(min, max);
        for (let i = 0; i < numberOfTalents; i++) {
            let newString = table.roleWithCascade().text
            if (!property.includes(newString)) {
                property.push(newString);
            }
        }
        return property;
    }

    toString(){
        let description = `${this.name} a ${this.adjective} ${this.gender} ${this.description} which eating habit is ${this.meal} and which reproduces ${this.reproduction}`
        for(let i = 0; i < this.curses.length; i++){
            description += `${this.curses[i]} `;
        }
        if(this.advantages.length > 0 || this.disadvantages.length > 0){
            description += "with "
        }
        for(let i = 0; i < this.advantages.length; i++){
            description += `${this.advantages[i]}`;
            if(i < this.advantages.length-1){
                description += ", "
            }else{
                description += " "
            }
        }
        if(this.disadvantages.length > 0 && this.advantages.length > 0){
            description += " and is "
        }else if(this.disadvantages.length > 0){
            description += " which is "
        }
        for(let i = 0; i < this.advantages.length; i++){
            description += `${this.advantages[i]}`;
            if(i < this.advantages.length-1){
                description += ", "
            }else{
                description += " "
            }
        }
        return description;
    }
}