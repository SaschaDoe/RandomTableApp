import { Dice } from "./dice";

export class FakeDice extends Dice{
    diceResults: number[];

    constructor(){
        super();
        this.diceResults = [];
    }

    with(diceResults : number[]){
        this.diceResults = diceResults;
        return this;
    }

    withNumberOf(numberOfDiceResults: number, diceResult: number){
        let diceResultArray = [];
        for(let i = 0; i < numberOfDiceResults; i++){
            diceResultArray.push(diceResult);
        }
        this.diceResults = diceResultArray;
        return this;
    }

    getRandomInt(min: number, max: number): number {
        let diceResult = this.diceResults.shift();
        if(diceResult === undefined) {
            return 0;
        }
        return diceResult;
    }
}