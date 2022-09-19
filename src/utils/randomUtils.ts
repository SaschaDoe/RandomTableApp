import {Dice} from "./dice";

export function randomIntFromInterval(min : number, max : number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function probabilityCheck(probability : number) {
    let randomNumber = randomIntFromInterval(0, 100);
    return randomNumber > 0 && randomNumber < probability;

}