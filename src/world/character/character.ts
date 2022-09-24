import {Dice} from "../../utils/dice";
import {AttributeEntity} from "./attributeEntity";
import type {CharacterBuilder} from "./characterBuilder";
import type {Equatable} from "../../utils/equatable";
import {expect} from "vitest";
import {arrayEquals} from "../../utils/equatable";


export class Character extends AttributeEntity implements Equatable<Character>{
    readonly alignment: string;
    readonly gender: string;
    readonly name: string;
    readonly nobility: string;
    readonly motivation: string;
    readonly profession: string;
    readonly race : string;

    readonly advantages: string[];
    readonly curses: string[];
    readonly specialFeatures: string[];


    constructor(
        characterBuilder: CharacterBuilder
    ) {
        super();
        if(characterBuilder.charAlignment === undefined){
            throw Error("Character alignment must be set");
        }
        this.alignment = characterBuilder.charAlignment;

        if(characterBuilder.charGender === undefined){
            throw Error("Character gender must be set");
        }
        this.gender = characterBuilder.charGender;

        if(characterBuilder.charMotivation === undefined){
            throw Error("Character motivation must be set");
        }
        this.motivation = characterBuilder.charMotivation;

        if(characterBuilder.charName === undefined){
            throw Error("Character name must be set");
        }
        this.name = characterBuilder.charName;

        if(characterBuilder.charNobility === undefined){
            throw Error("Character nobility must be set");
        }
        this.nobility = characterBuilder.charNobility;

        if(characterBuilder.charProfession === undefined){
            throw Error("Character profession must be set");
        }
        this.profession = characterBuilder.charProfession;

        if(characterBuilder.charRace === undefined){
            throw Error("Character race must be set");
        }
        this.race = characterBuilder.charRace;

        this.curses = characterBuilder.charCurses;
        this.specialFeatures = characterBuilder.charSpecialFeatures;
        this.advantages = characterBuilder.charAdvantages;
    }

    isEqualTo(other: Character){
        return (this.alignment === other.alignment &&
            arrayEquals(this.advantages, other.advantages) &&
            arrayEquals(this.curses, other.curses) &&
            this.gender === other.gender &&
            this.name === other.name &&
            this.nobility === other.nobility &&
            this.motivation === other.motivation &&
            this.profession === other.profession &&
            this.race === other.race &&
            arrayEquals(this.specialFeatures, other.specialFeatures));
    }

    /*

      isHigherPower: boolean;




      relationships: Relationship[];


      advantages: string[];
      disadvantages : string[];
      talents: string[];
      artefacts: Artefact[];

      homeContinent: Site;
      readonly isMagicUserProfession: boolean;


      */


/*
    constructor(dice = new Dice(), isHigherPower = false) {
        let name = "";
        super(dice, name);
        this.specialFeature = new SpecialFeaturesTable().roleWithCascade().text;
        this.artefacts = []
        this.isHigherPower = isHigherPower;
        this.gender = Gender.Female;
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
*/
    /*
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

    getDescription(){
        let description = `${this.name} a ${this.gender} ${this.race} `
        for(let i = 0; i < this.curses.length; i++){
            description += `${this.curses[i]} `;
        }
        description += `${this.nobility} ${this.profession} with ${this.specialFeature}`;
        if(this.advantages.length > 0 || this.disadvantages.length > 0){
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
    */

}

