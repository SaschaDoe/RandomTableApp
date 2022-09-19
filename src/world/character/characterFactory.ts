import {Character} from "./character";
import {Dice} from "../../utils/dice";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {higherPowerBeingsStore} from "./charStore";
import {probabilityCheck, randomIntFromInterval} from "../../utils/randomUtils";

export function createHigherPower(){
    let higherPowerBeing: Character;
    let higherPowerBeings = [] as Character[];
    higherPowerBeingsStore.subscribe(beings => {
        higherPowerBeings = beings;
    })
    let isProbability = probabilityCheck(1)

    if(isProbability || (higherPowerBeings.length === 0)){
        higherPowerBeing = new Character(new Dice(),true)
        higherPowerBeing.talents.push(new TalentTable().roleWithCascade().text)
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