import type {DiceRole} from "../tables/diceRole";


export class Dice{

    role(diceRole : DiceRole){
        let result = ""
        for(let n = 0; n < diceRole.numberOfRoles; n++){
            let randomRoleResult = 0;
            for (let i = 0; i < diceRole.numberOfDice; i++) {
                const randomNumber = this.getRandomInt(1, diceRole.diceType);
                randomRoleResult += randomNumber;
            }

            randomRoleResult += diceRole.summand;
            result += randomRoleResult;


        }
        return parseInt(result);
    }

    // The maximum and minimum are inclusive
    getRandomInt(min : number, max : number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
}