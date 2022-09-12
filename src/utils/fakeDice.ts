import { Dice } from "./dice";
import type {DiceRole} from "../tables/diceRole";

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

    getRandomInt(min: number, max: number): number {
        let diceResult = this.diceResults.shift();
        if(diceResult === undefined) {
            return 0;
        }
        return diceResult;
    }
}