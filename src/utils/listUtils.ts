import type {TableEntry} from "../tables/tableEntry";


export function getMaxDiceResult(entries : TableEntry[]){
    let maxes = entries.map(entry => entry.getMax());
    return Math.max(...maxes);
}

export function getMinDiceResult(entries : TableEntry[]){
    let mins = entries.map(entry => entry.getMin());
    return Math.min(...mins);
}

export function isBetween(number : number, min : number, max : number){
    return (number >= min) && (number <= max);
}
