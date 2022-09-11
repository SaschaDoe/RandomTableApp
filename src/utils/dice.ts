import type {DiceRole} from "../tables/diceRole";


export class Dice{

    role(diceRole : DiceRole){
        let randomRoleResult = 0;
        for (let i = 0; i < diceRole.multiplier; i++) {
            const randomNumber = this.getRandomInt(0, diceRole.diceType);
            randomRoleResult += randomNumber;
        }

        randomRoleResult += diceRole.summand;
        return randomRoleResult;
    }

    // The maximum is exclusive and the minimum is inclusive
    getRandomInt(min : number, max : number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      
}