export function randomIntFromInterval(min : number, max : number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function isInProbability(probability : number) {
    let randomNumber = randomIntFromInterval(0, 100);
    if (randomNumber > 0 && randomNumber < probability) {
        return true;
    }
    return false;
}