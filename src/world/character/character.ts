import {Dice} from "../../utils/dice";
import {GermanMaleNameTable} from "../../tables/nameTables/germanMaleNameTable";
import {GenderTable} from "../../tables/charTables/genderTable";
import {GermanFemaleNameTable} from "../../tables/nameTables/germanFemaleNameTable";
import {Gender} from "../../tables/charTables/gender";
import type {Relationship} from "./relationship";
import {MotivationTable} from "../../tables/charTables/motivationTable";
import {RaceTable} from "../../tables/charTables/raceTable";
import {NobilityTable} from "../../tables/charTables/nobilityTable";
import {ProfessionTable} from "../../tables/charTables/professionTable";
import {AlignmentTable} from "../../tables/charTables/alignmentTable";
import {mapSiteWithChar} from "../site/continentFactory";
import type {Site} from "../site/site";
import {MagicUserProfessions} from "../../tables/charTables/magicUserProfessions";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {MagicalTalentTable} from "../../tables/talentTables/magicalTalentTable";
import type {Artefact} from "../artefacts/artefact";
import {CurseTable} from "../../tables/charTables/curseTable";
import {AdvantageTable} from "../../tables/charTables/advantageTable";
import {DisadvantageTable} from "../../tables/charTables/disadvantageTable";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {AttributeEntity} from "./attributeEntity";
import {SpecialFeaturesTable} from "../../tables/charTables/specialFeaturesTable";


export class Character extends AttributeEntity{
    isHigherPower: boolean;
    race : string;
    gender : string;
    motivation : string;



    relationships: Relationship[];
    curses: string[];
    nobility: string;
    profession: string;
    advantages: string[];
    disadvantages : string[];
    talents: string[];
    alignment: string;

    homeContinent: Site;
    readonly isMagicUserProfession: boolean;
    artefacts: Artefact[];
    specialFeature: string;

    constructor(dice = new Dice(), isHigherPower = false) {
        let name = "";
        let gender = new GenderTable().role().text
        if(gender === Gender.Female){
            name = new GermanFemaleNameTable().role().text;
        }else{
            name = new GermanMaleNameTable().role().text;
        }
        super(dice, name);
        this.specialFeature = new SpecialFeaturesTable().roleWithCascade().text;
        this.artefacts = []
        this.isHigherPower = isHigherPower;
        this.gender = gender;
        this.motivation = new MotivationTable().roleWithCascade().text;
        this.nobility = new NobilityTable().role().text;
        this.profession = new ProfessionTable().roleWithCascade().text;
        this.isMagicUserProfession = this.isMatchingMagicUsers();
        this.disadvantages = [];
        this.advantages = [];
        this.relationships = [];
        this.curses = [];
        this.homeContinent = mapSiteWithChar(dice);
        this.alignment = new AlignmentTable().roleWithCascade().text;
        this.race = new RaceTable().roleWithCascade().text
        this.talents = [];
        if(this.isMagicUserProfession){
            this.getMinOneMagicPower();
        }
        this.roleForAttributes(dice);
    }



    private isMatchingMagicUsers() {
        let magicUsers = Object.keys(MagicUserProfessions);
        for(let i = 0; i < magicUsers.length; i++){
            let magicUserProfession = magicUsers[i];
            if(this.profession === magicUserProfession){
                return true;
            }
        }
        return false;
    }

    private getMinOneMagicPower() {
        let randomNumber = randomIntFromInterval(1,3);
        for(let i = 0; i < randomNumber; i++){
            this.talents.push(new MagicalTalentTable().roleWithCascade().text)
        }
    }

    addCurse() {
        this.curses.push(new CurseTable().roleWithCascade().text)
    }

    addAdvantage() {
        this.advantages.push(new AdvantageTable().roleWithCascade().text)
    }

    addDisadvantage() {
        this.disadvantages.push(new DisadvantageTable().roleWithCascade().text)
    }

    addTalent() {
        this.talents.push(new TalentTable().roleWithCascade().text)
    }
}

