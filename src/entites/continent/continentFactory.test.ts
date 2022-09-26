import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {ContinentFactory} from "./continentFactory";

describe("ContinentFactory", () => {
    test("should set default content to what is given in random tables", () => {
        let tableOutput = [
            ["continenta"],
            ];
        let tableTitle = [
            TableTitles.GermanMaleName,
        ];
        let continentFactory = new ContinentFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let continent = continentFactory.create();

        expect(continent.name).toBe("continenta");

    })
})