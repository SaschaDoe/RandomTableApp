import {describe, expect, test} from "vitest";
import {CharacterFactory} from "./characterFactory";
import {RoleResult} from "../../tables/roleResult";
import {Table} from "../../tables/table";
import {AllTablesMap} from "../../tables/allTablesMap";
import {TableTitles} from "../../tables/tableTitles";
import type {Character} from "./character";

describe("CharacterFactory", () => {

    test("should character attribute according to random Attributes", () => {
        let inputs = testInputs();
        for(let i = 0; i<inputs.length; i++){
            let input = inputs[i];
            let tableTitles = input[0] as TableTitles[];
            let tableOutputs = input[1] as string[];
            let charFactoryFnk = input[2] as ((charFactory: CharacterFactory) => void)
            let charExpectationFnk = input[3] as ((character: Character) => string);
            let expectedString = input[4] as string;

            let characterFactory = new CharacterFactory(new FakeAllTablesMap(tableTitles,tableOutputs));

            charFactoryFnk(characterFactory)

            let character = characterFactory.character;
            expect(charExpectationFnk(character)).toBe(expectedString);
        }
    })


})

function testInputs(){
    return [
        [[TableTitles.Gender],["female"],(char:CharacterFactory) => char.setRandomGender(), (char: Character) => char.gender,"female"],
        [[TableTitles.Gender],["male"],(char:CharacterFactory) => char.setRandomGender(), (char: Character) => char.gender,"male"],

        [
            [TableTitles.Gender, TableTitles.GermanMaleName],
            ["male", "maleName"],
            (char:CharacterFactory) => char.setRandomName(),
            (char: Character) => char.name,
            "maleName"
        ],

        [
            [TableTitles.Gender, TableTitles.GermanFemaleNames],
            ["female", "femaleName"],
            (char:CharacterFactory) => char.setRandomName(),
            (char: Character) => char.name,
            "femaleName"
        ],

        [
            [TableTitles.Gender, TableTitles.GermanFemaleNames],
            ["female", "femaleName"],
            (char:CharacterFactory) => {char.setRandomName()},
            (char: Character) => char.gender,
            "femaleName"
        ],
    ]
}

class FakeAllTablesMap extends AllTablesMap{

    constructor(tableTitles: TableTitles[], outputStrings: string[]) {
        super(fakeAllTablesMapFunction(tableTitles,outputStrings));
    }
}

export function fakeAllTablesMapFunction(tableTitles: TableTitles[], outputStrings: string[]){
    let allTablesMap = new Map<TableTitles,Table>();

    initializeTables(allTablesMap)

    for(let i = 0; i < tableTitles.length; i++){
        let tableTitle = tableTitles[i];
        let outputString = outputStrings[i];
        allTablesMap.set(tableTitle, new FakeTable(outputString))
    }

    return allTablesMap;
}

function initializeTables(allTablesMap: Map<TableTitles,Table>){
    allTablesMap.set(TableTitles.Gender, new FakeTable("female"));
    allTablesMap.set(TableTitles.GermanFemaleNames, new FakeTable("femaleName"));
    allTablesMap.set(TableTitles.GermanMaleName, new FakeTable("maleName"));
    return allTablesMap;
}

class FakeTable extends Table{
    private result: string;

    constructor(result: string) {

        super();
        this.result = result;
    }
    role(){
        return new RoleResult(this.result)
    }
}