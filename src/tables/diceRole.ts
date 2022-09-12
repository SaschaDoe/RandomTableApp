import { DiceTypes } from "./diceTypes";

export class DiceRole{
  multiplier: number;
  diceType: DiceTypes;
  summand: number;
  numberOfRoles: number;

  constructor(){
    this.numberOfRoles = 1;
    this.multiplier = 1;
    this.diceType = DiceTypes.w6;
    this.summand = 0;
  }

  minResult(){
    let minResult = (this.multiplier + this.summand).toString();
    let result = minResult;
    for(let i = 1; i < this.numberOfRoles; i++){
      result = `${result}${minResult}`;
    }

    return parseInt(result);
  }

  maxResult(){
    return this.multiplier * this.diceType.valueOf() + this.summand;
  }

  numberOfDice(multiplier: number) {
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
    let multiplierOperator = '';
    if(this.numberOfRoles > 1){
      multiplierOperator = `${ this.numberOfRoles }x`;
    }
    return `${multiplierOperator}${this.multiplier}w${this.diceType.toString()}${additionOperator}`;
  }

  withNumberOfRoles(number: number) {
    this.numberOfRoles = number;
    return this;
  }
}