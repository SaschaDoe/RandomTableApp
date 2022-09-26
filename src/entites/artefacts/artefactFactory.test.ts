import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {ArtefactFactory} from "./artefactFactory";

describe("ArtefactFactory", () => {
    test("should set default artefact to what is given in random tables", () => {
        let tableOutput = [
            ["common"],
            ["broken"],
            ["fireball"],
            ["wood"],
        ];
        let tableTitle = [
            TableTitles.Rarity,
            TableTitles.Quality,
            TableTitles.MagicalTalent,
            TableTitles.Materials,
            ];
        let artefactFactory = new ArtefactFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let artefact = artefactFactory.create();

        expect(artefact.rarity).toBe("common");
        expect(artefact.quality).toBe("broken");

        expect(artefact.magicTalents.length).toBe(1);
        expect(artefact.magicTalents[0]).toBe("fireball");

        expect(artefact.materials.length).toBe(1);
        expect(artefact.materials[0]).toBe("wood");
    })
})