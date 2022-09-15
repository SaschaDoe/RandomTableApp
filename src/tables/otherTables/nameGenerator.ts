import {randomIntFromInterval} from "../../utils/randomUtils";
import {ConsonantTable} from "./consonantTable";
import {VocalTable} from "./vocalTable";

function generateNameOfLength(numberOfSyllabus: number) {
    let name = "";

    let isFirstVocal = randomIntFromInterval(0,1);
    if(isFirstVocal === 1){
        name = new VocalTable().role().text;
    }

    for (let i = 0; i < numberOfSyllabus; i++) {
        let consonant = new ConsonantTable().role().text;
        let vocal = new VocalTable().role().text;
        let newSyllabus = consonant + vocal;
        name = name + newSyllabus
    }

    return name;
}

export function generateName(){
    let numberOfSyllabus = randomIntFromInterval(1,10);

    return generateNameOfLength(numberOfSyllabus);
}

export function generateContinentName(){
    let numberOfSyllabus = randomIntFromInterval(1,4);

    let name = generateNameOfLength(numberOfSyllabus);

    let consonant = new ConsonantTable().role().text;

    let isEndingToA = randomIntFromInterval(0,1);

    if(isEndingToA === 1){
        let vocal = "a";
        let newSyllabus = consonant + vocal;
        name = name + newSyllabus;
    }else{
        name = name + "ien";
    }

    return name;
}
