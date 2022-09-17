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
        let isTwoConsonants = randomIntFromInterval(0,1);
        let consonant = new ConsonantTable().role().text;
        if(isTwoConsonants){
            consonant = consonant + new ConsonantTable().role().text;
        }
        let vocal = new VocalTable().role().text;
        let newSyllabus = consonant + vocal;
        name = name + newSyllabus
    }

    return name;
}

export function generateName(maxNumberOfSyllabus = 7){
    let numberOfSyllabus = randomIntFromInterval(1,maxNumberOfSyllabus);

    return generateNameOfLength(numberOfSyllabus);
}

export function generateContinentName(){
    let numberOfSyllabus = randomIntFromInterval(0,4);

    let name = generateNameOfLength(numberOfSyllabus);

    let consonant = new ConsonantTable().role().text;

    let ending = randomIntFromInterval(0,2);

    if(ending === 0){
        let vocal = "a";
        let newSyllabus = consonant + vocal;
        name = name + newSyllabus;
    }else if(ending === 1){
        name = name + "ien";
    }else{
        name = name + "ion"
    }

    return name;
}
