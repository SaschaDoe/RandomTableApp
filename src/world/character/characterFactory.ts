import {Character} from "./character";
import {Dice} from "../../utils/dice";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {higherPowerBeingsStore} from "./charStore";

export function createHigherPower(){
    //TODO add posibility that higher power being is taken from store
    let higherPowerBeing = new Character(new Dice(),true)
    higherPowerBeing.talents.push(new TalentTable().roleWithCascade().text)
    higherPowerBeingsStore.update(beings =>{
        beings.push(higherPowerBeing);
        return beings;
    })
    return higherPowerBeing.getUniqueName();
}