import {TableRoller} from "../../tables/tableRoler";
import {CharacterBuilder} from "./characterBuilder";
import {TableTitles} from "../../tables/tableTitles";

export class CharacterFactory{
    private tableRoller: TableRoller;
    private characterName: string;

    constructor(
        tableRoller = new TableRoller()
    ){
        this.tableRoller = tableRoller

        this.characterName = tableRoller.roleFor(TableTitles.GermanMaleName).text;
    }

    create() {
        return new CharacterBuilder()
            .withName(this.characterName)
            .build();
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


}
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
