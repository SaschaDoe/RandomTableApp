import {Character} from "./character";
import {Dice} from "../../utils/dice";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {applyNotMandatoryTables, characters, higherPowerBeingsStore} from "./charStore";
import {probabilityCheck, randomIntFromInterval} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";
import {AllTablesMap} from "../../tables/allTablesMap";

export class CharacterFactory{
    character: Character;
    allTableMap: AllTablesMap;

    constructor(
        allTableMap = new AllTablesMap()
    ){
        this.character = new Character();
        this.allTableMap = allTableMap;
    }

    setRandomGender(){
        let oldGender = this.character.gender;
        let genderTable = this.allTableMap.getTableOf(TableTitles.Gender)
        this.character.gender = genderTable.roleWithCascade().text;
        if(oldGender != this.character.gender){
            this.setRandomName();
        }
    }

    setRandomName(){
        if(this.character.gender === "female"){
            let femaleTable = this.allTableMap.getTableOf(TableTitles.GermanFemaleNames)
            this.character.name = femaleTable.roleWithCascade().text;
        }else{
            let maleTable = this.allTableMap.getTableOf(TableTitles.GermanMaleName)
            this.character.name = maleTable.roleWithCascade().text;
        }

    }
}

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