import type {DiceRole} from "../tables/diceRole";


export class Dice{

    role(diceRole : DiceRole){
        let result = ""
        for(let n = 0; n < diceRole.numberOfRoles; n++){
            let randomRoleResult = 0;
            for (let i = 0; i < diceRole.multiplier; i++) {
                const randomNumber = this.getRandomInt(1, diceRole.diceType+1);
                randomRoleResult += randomNumber;
            }

            randomRoleResult += diceRole.summand;
            result += randomRoleResult;


        }
        return parseInt(result);
    }

    // The maximum is exclusive and the minimum is inclusive
    getRandomInt(min : number, max : number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      
}