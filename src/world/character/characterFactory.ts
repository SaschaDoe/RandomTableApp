import {TableRoller} from "../../tables/tableRoler";
import {CharacterBuilder} from "./characterBuilder";
// @ts-ignore
import {CharacterAttributeTableTitlesMap} from "./characterAttributeTableTitlesMap";
import {Random} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";

export let advantagesMinInterval = -10;
export let advantagesMaxInterval = 3;
export let curseMinInterval = -50;
export let curseMaxInterval = 2;
export let specialFeaturesMinInterval = -10;
export let specialFeaturesMaxInterval = 2;

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

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random;
    }

    create() {
        this.setAllMandatory();
        this.setAllNonMandatory()

        return new CharacterBuilder()
            .withAlignment(this.characterAlignment)
            .withName(this.characterName)
            .withGender(this.characterGender)
            .withNobility(this.characterNobility)
            .withMotivation(this.characterMotivation)
            .withProfession(this.characterProfession)
            .withRace(this.characterRace)
            .withAdvantages(this.characterAdvantages)
            .withCurses(this.characterCurses)
            .withSpecialFeature((this.charSpecialFeatures))
            .build();
    }

    private setAllMandatory() {
        let charAttributeTableTitleMap = new CharacterAttributeTableTitlesMap().charAttributeTableTitlesMap;
        charAttributeTableTitleMap.forEach((attributeFnk, title) => {
            let text = this.tableRoller.roleFor(title).text;
            attributeFnk(this, text);
        })
    }

    private setAllNonMandatory() {
        let numberOfAdvantages = this.random.intFromInterval(advantagesMinInterval,advantagesMaxInterval);
        for(let i = 0; i < numberOfAdvantages; i++){
            this.characterAdvantages.push(this.tableRoller.roleFor(TableTitles.Advantages).text);
        }

        let numberOfCurses = this.random.intFromInterval(curseMinInterval,curseMaxInterval);
        for(let i = 0; i < numberOfCurses; i++){
            this.characterCurses.push(this.tableRoller.roleFor(TableTitles.Curse).text);
        }

        let numberOfSpecialFeatures = this.random.intFromInterval(specialFeaturesMinInterval, specialFeaturesMaxInterval)
        for(let i = 0; i < numberOfSpecialFeatures; i++){
            this.charSpecialFeatures.push(this.tableRoller.roleFor(TableTitles.SpecialFeatures).text);
        }
    }
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
