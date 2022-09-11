import type {TableEntry} from "../tables/tableEntry";


export function getMaxDiceResult(entries : TableEntry[]){
    let maxes = entries.map(entry => entry.maxRole);
    return Math.max(...maxes);
}

export function getMinDiceResult(entries : TableEntry[]){
    let mins = entries.map(entry => entry.minRole);
    return Math.min(...mins);
}

export function isInbetween(number : number, min : number, max : number){
    if ((number >= min) && (number <= max)){
        return true;
    }
    
    return false;
}