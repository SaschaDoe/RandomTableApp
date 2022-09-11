import { DiceTypes } from "./diceTypes";

export class DiceRole{
  multiplier: number;
  diceType: DiceTypes;
  summand: number;

  constructor(){
    this.multiplier = 1;
    this.diceType = DiceTypes.w6;
    this.summand = 0;
  }

  minResult(){
    return this.multiplier + this.summand;
  }

  maxResult(){
    return this.multiplier * this.diceType.valueOf() + this.summand;
  }

  withMultiplier(multiplier: number) {
    this.multiplier = multiplier;
    return this;
  }

  withDiceType(diceTpye: DiceTypes) {
    this.diceType = diceTpye;
    return this;
  }

  withSummand(summand: number) {
    this.summand = summand;
    return this;
  }

  toString(){
    let additionOperator = '';
    if(this.summand > 0){
      additionOperator = `+${ this.summand }`;
    }
    if(this.summand < 0){
      additionOperator = `${ this.summand }`;
    }
    return `${this.multiplier}w${this.diceType.toString()}${additionOperator}`;
  }
}