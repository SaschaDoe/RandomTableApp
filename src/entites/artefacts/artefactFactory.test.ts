import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {ArtefactFactory} from "./artefactFactory";

describe("ArtefactFactory", () => {
    test("should set default artefact to what is given in random tables", () => {
        let tableOutput = [
            ["common"],];
        let tableTitle = [
            TableTitles.Rarity,
            ];
        let artefactFactory = new ArtefactFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let character = artefactFactory.create();

        expect(character.rarity).toBe("common");
    })
})