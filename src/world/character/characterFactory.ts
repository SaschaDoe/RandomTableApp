import {TableRoller} from "../../tables/tableRoler";
import {CharacterBuilder} from "./characterBuilder";
import {CharacterAttributeTableTitlesMap} from "./characterAttributeTableTitlesMap";
import {Random} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";
import type {Site} from "../site/site";
import {mapSiteWithChar} from "../site/continentFactory";
import {isMagicalProfession} from "../../tables/charTables/magicUserProfessions";

export let advantagesMinInterval = -10;
export let advantagesMaxInterval = 3;
export let disadvantagesMinInterval = -10;
export let disadvantagesMaxInterval = 3;
export let curseMinInterval = -50;
export let curseMaxInterval = 2;
export let specialFeaturesMinInterval = -10;
export let specialFeaturesMaxInterval = 2;
export let talentsMinInterval = -20;
export let talentsMaxInterval = 3;
export let magicalTalentsMinInterval = -50;
export let magicalTalentUserMinInterval = 1
export let magicalTalentHigherPowerMinInterval = 3
export let magicalTalentHigherPowerMaxInterval = 7
export let magicalTalentMaxInterval = 3;

export class CharacterFactory {
    tableRoller: TableRoller;
    random: Random;

    characterAlignment = "";
    characterName = "";
    characterGender = "";
    characterNobility = "";
    characterMotivation = "";
    characterRace = "";
    characterProfession = "";

    characterAdvantages = [] as string[];
    characterCurses = [] as string[];
    charSpecialFeatures = [] as string[];
    characterDisadvantages = [] as string[];
    charTalents = [] as string[];
    charMagicalTalents = [] as string[];
    characterContinent: Site;
    characterIsHigherPower = false;

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.setAllMandatory();
        this.setAllNonMandatory()

        this.characterContinent = mapSiteWithChar();
    }

    create() {
        let characterBuilder = new CharacterBuilder()

        this.ensureMagicalUserHasAtLeastOneMagicalTalent();
        this.ensureHigherPowerHasAtLeastThreeMagicalTalent();

        return characterBuilder
            .withAlignment(this.characterAlignment)
            .withName(this.characterName)
            .withGender(this.characterGender)
            .withNobility(this.characterNobility)
            .withMotivation(this.characterMotivation)
            .withProfession(this.characterProfession)
            .withRace(this.characterRace)
            .withAdvantages(this.characterAdvantages)
            .withDisadvantages(this.characterDisadvantages)
            .withCurses(this.characterCurses)
            .withSpecialFeature((this.charSpecialFeatures))
            .withTalents((this.charTalents))
            .withMagicalTalents((this.charMagicalTalents))
            .withContinent(this.characterContinent)
            .withIsHigherPower(this.characterIsHigherPower)
            .build()
    }

    private ensureMagicalUserHasAtLeastOneMagicalTalent() {
        if (isMagicalProfession(this.characterProfession) && this.charMagicalTalents.length < 1) {
            this.setNonMandatory(magicalTalentUserMinInterval, magicalTalentMaxInterval, this.charMagicalTalents, TableTitles.MagicalTalent);
        }
    }

    private ensureHigherPowerHasAtLeastThreeMagicalTalent() {
        if (this.characterIsHigherPower && this.charMagicalTalents.length < 3) {
            this.setNonMandatory(magicalTalentHigherPowerMinInterval, magicalTalentHigherPowerMaxInterval, this.charMagicalTalents, TableTitles.MagicalTalent);
        }
    }

    private setAllMandatory() {
        let charAttributeTableTitleMap = new CharacterAttributeTableTitlesMap().charAttributeTableTitlesMap;
        charAttributeTableTitleMap.forEach((attributeFnk, title) => {
            let text = this.tableRoller.roleFor(title).text;
            attributeFnk(this, text);
        })
    }

    private setAllNonMandatory() {
        this.setNonMandatory(advantagesMinInterval, advantagesMaxInterval,this.characterAdvantages,TableTitles.Advantages)
        this.setNonMandatory(disadvantagesMinInterval, disadvantagesMaxInterval,this.characterDisadvantages,TableTitles.Disadvantages)
        this.setNonMandatory(curseMinInterval, curseMaxInterval,this.characterCurses,TableTitles.Curse)
        this.setNonMandatory(specialFeaturesMinInterval, specialFeaturesMaxInterval,this.charSpecialFeatures,TableTitles.SpecialFeatures)
        this.setNonMandatory(talentsMinInterval, talentsMaxInterval,this.charTalents,TableTitles.Talent)
        this.setNonMandatory(magicalTalentsMinInterval, magicalTalentMaxInterval,this.charMagicalTalents,TableTitles.MagicalTalent)
    }

    private setNonMandatory(minInterval: number, maxInterval: number, charAttribute: string[], tableTitle: TableTitles) {
        let numberOfAdvantages = this.random.intFromInterval(minInterval,maxInterval);
        if(numberOfAdvantages <= 0 && minInterval === 1){
            numberOfAdvantages = 0;
        }
        for(let i = 0; i < numberOfAdvantages; i++){
            charAttribute.push(this.tableRoller.roleFor(tableTitle).text);
        }
    }


}

export function createHigherPower() {
    let charFactory = new CharacterFactory();
    charFactory.characterIsHigherPower = true;
    return charFactory.create();
}

export function createHigherPowerReturnUniqueName(){
    let higherPower = createHigherPower();
    return higherPower.getUniqueName();
}

/*
    createNewCharacter(){
        let gender = this.tableRoller.roleFor(TableTitles.Gender);

        return new Character(gender)
    }

    getRandomGender(){
        let oldGender = this.gender;
        let genderTable = this.getTableOf(TableTitles.Gender)
        this.gender = genderTable.roleWithCascade().text;
        if(oldGender != this.gender){
            this.setRandomName();
        }
    }

    setRandomName(){
        if(this.gender === "female"){
            let femaleTable = this.getTableOf(TableTitles.GermanFemaleNames)
            this.name = femaleTable.roleWithCascade().text;
        }else{
            let maleTable = this.allTableMap.getTableOf(TableTitles.GermanMaleName)
            this.name = maleTable.roleWithCascade().text;
        }
    }

    setRandomSpecialFeature() {
        let specialFeatureTable = this.getTableOf(TableTitles.SpecialFeatures);
        this.specialFeature = specialFeatureTable.roleWithCascade().text;
    }

    setRandomMotivation() {
        let specialFeatureTable = this.getTableOf(TableTitles.Motivation);
        this.character.motivation = specialFeatureTable.roleWithCascade().text;
    }

    setRandomCurses(random = new Random()) {
        let specialFeatureTable = this.getTableOf(TableTitles.Curse)
        let numberOfCurses = random.intFromInterval(-50,2);
        for(let i = 0; i < numberOfCurses; i++){
            this.character.curses.push(specialFeatureTable.roleWithCascade().text);
        }
    }

    private getTableOf(tableTitle: TableTitles){
        return this.allTableMap.getTableOf(tableTitle);
    }

    setRandomNobility() {
        let nobilityTable = this.getTableOf(TableTitles.Nobility);
        this.character.nobility = nobilityTable.roleWithCascade().text;
    }*/
/*
export function createHigherPower(){
    let higherPowerBeing: Character;
    let higherPowerBeings = [] as Character[];
    higherPowerBeingsStore.subscribe(beings => {
        higherPowerBeings = beings;
    })
    let isProbability = probabilityCheck(1)

    if(isProbability || (higherPowerBeings.length === 0)){
        higherPowerBeing = new Character(new Dice(),true)
        applyNotMandatoryTables(higherPowerBeing);
        let randomNumber = randomIntFromInterval(1,6);
        for(let i = 0; i < randomNumber; i++){
            higherPowerBeing.talents.push(new TalentTable().roleWithCascade().text)
        }
        higherPowerBeingsStore.update(beings =>{
            beings.push(higherPowerBeing);
            return beings;
        })
    }else{
        let randomNumber = randomIntFromInterval(0, higherPowerBeings.length-1);
        higherPowerBeing = higherPowerBeings[randomNumber];
    }
    return higherPowerBeing.getUniqueName();
}

export function createNSC(){
    let character = new Character()
    applyNotMandatoryTables(character);
    characters.update(chars => {
        chars.push(character);
        return chars;
    })
    return character.getUniqueName();
}

export function getNewNSC(){
    let character = new Character()
    applyNotMandatoryTables(character);
    characters.update(chars => {
        chars.push(character);
        return chars;
    })
    return character;
}
*/
