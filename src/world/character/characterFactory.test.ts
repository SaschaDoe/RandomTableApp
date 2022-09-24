import {describe, expect, test} from "vitest";
import {CharacterFactory} from "./characterFactory";
import {TableTitles} from "../../tables/tableTitles";
import {TableRoller} from "../../tables/tableRoler";
import {FakeAllTablesMap} from "../../tables/tableRoller.test";
import {Random} from "../../utils/randomUtils";


describe("CharacterFactory", () => {
    test("should set default character to what is given in random tables", () => {
        let tableOutput = [
            ["good"],
            ["female"],
            ["motivation"],
            ["name"],
            ["nobel"],
            ["profession"],
            ["human"],
            ["lucky"],
            ["vampire"],
            ["horn"]];
        let tableTitle = [
            TableTitles.Alignment,
            TableTitles.Gender,
            TableTitles.Motivation,
            TableTitles.GermanMaleName,
            TableTitles.Nobility,
            TableTitles.Profession,
            TableTitles.Race,
            TableTitles.Advantages,
            TableTitles.Curse,
            TableTitles.SpecialFeatures];
        let characterFactory = new CharacterFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1]))

        let character = characterFactory.create();

        expect(character.alignment).toBe("good");
        expect(character.gender).toBe("female");
        expect(character.name).toBe("name");
        expect(character.nobility).toBe("nobel");
        expect(character.motivation).toBe("motivation");
        expect(character.profession).toBe("profession");
        expect(character.race).toBe("human");

        expect(character.advantages.length).toBe(1);
        expect(character.advantages[0]).toBe("lucky");

        expect(character.curses.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");

        expect(character.specialFeatures.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");
    })
})

class FakeRandom extends Random{
    private readonly results: number[];
    private count: number;

    constructor(results: number[]) {
        super();
        this.results = results;
        this.count = 0;
    }

    intFromInterval(minIncluded: number, maxIncluded: number): number {
        let result = this.results[this.count];
        this.count++;
        return result;
    }
}

class FakeTableRoller extends TableRoller{
    constructor(tableTitles: TableTitles[], tableOutputs: string[][]) {
        super(new FakeAllTablesMap(tableTitles,tableOutputs));

    }

}


    /*
        test("should character attribute according to random Attributes", () => {
            let inputs = testInputs();
            for(let i = 0; i<inputs.length; i++){
                let input = inputs[i];
                let tableTitles = input[0] as TableTitles[];
                let tableOutputs = input[1] as string[][];
                let charFactoryFnk = input[2] as ((charFactory: CharacterFactory) => void);
                let expectationFnk = input[3] as ((char: Character) => void)

                let characterFactory = new CharacterFactory(new TableRoller());

                charFactoryFnk(characterFactory)

                let character = characterFactory.character;
                expectationFnk(character);
            }
        })
    })

    function testInputs(){
        return [
            [
                [TableTitles.Gender, TableTitles.GermanFemaleNames],
                [["female"],["female name"]],                                                 //Arrange
                (characterFactory:CharacterFactory) => characterFactory.setRandomGender(),                            //Act
                (char: Character) => ["female"].forEach(str => expect(char.gender).toBe(str)),//Assert
            ],*/
    /*
            [
                [TableTitles.Gender, TableTitles.GermanMaleName],
                [["male"], ["male nane"]],
                (char:CharacterFactory) => char.setRandomGender(),
                (char: Character) => ["male"].forEach(str => expect(char.gender).toBe(str)),
            ],

            [
                [TableTitles.Gender, TableTitles.GermanFemaleNames],
                [["female"], ["female name"]],
                (char:CharacterFactory) => {char.setRandomName()},
                (char: Character) => ["female name"].forEach(str => expect(char.name).toBe(str)),
            ],

            [
                [TableTitles.Gender, TableTitles.GermanMaleName],
                [["male"], ["male name", "male name"]], //change Gender triggers name change
                (charFactory:CharacterFactory) => {charFactory.setRandomGender(); charFactory.setRandomName()},
                (char: Character) => ["male name"].forEach(str => expect(char.name).toBe(str)),
            ],

            [
                [TableTitles.SpecialFeatures],
                [["special feature"]],
                (char:CharacterFactory) => char.setRandomSpecialFeature(),
                (char: Character) => ["special feature"].forEach(str => expect(char.specialFeature).toBe(str)),
            ],

            [
                [TableTitles.Motivation],
                [["motivation"]],
                (char:CharacterFactory) => char.setRandomMotivation(),
                (char: Character) => ["motivation"].forEach(str => expect(char.motivation).toBe(str)),
            ],

            [
                [TableTitles.Curse],
                [["curse"]],
                (char:CharacterFactory) => char.setRandomCurses(new FakeRandom([1])),
                (char: Character) => ["curse"].forEach((str,index) => expect(char.curses[index]).toBe(str)),
            ],

            [
                [TableTitles.Curse],
                [["curse one", "curse two"]],
                (char:CharacterFactory) => char.setRandomCurses(new FakeRandom([2])),
                (char: Character) =>
                    ["curse one", "curse two"].
                    forEach((str,index) =>
                        expect(char.curses[index])
                            .toBe(str)),
            ],

            [
                [TableTitles.Curse],
                [["curse one", "curse two"]],
                (char:CharacterFactory) => char.setRandomCurses(new FakeRandom([2])),
                (char: Character) =>
                    ["curse one", "curse two"].
                    forEach((str,index) =>
                        expect(char.curses[index])
                            .toBe(str)),
            ],

            [
                [TableTitles.Nobility],
                [["nobility"]],
                (char:CharacterFactory) => char.setRandomNobility(),
                (char: Character) =>
                    ["nobility"].
                    forEach((str) =>
                        expect(char.nobility)
                            .toBe(str)),
            ],

        ]
    }*/
    /*
    class FakeRandom extends Random{
        private readonly results: number[];
        private count: number;

        constructor(results: number[]) {
            super();
            this.results = results;
            this.count = 0;
        }

        intFromInterval(minIncluded: number, maxIncluded: number): number {
            if(this.results.length > this.count){
                let result = this.results[this.count];
                this.count++;
                return result;
            }else{
                throw Error(`Not enough results just ${this.results.length}`);
            }
        }
    }
    */

