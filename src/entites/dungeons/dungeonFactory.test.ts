import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {DungeonFactory} from "./dungeonFactory";

describe("DungeonFactory", () => {
    test("should set default dungeon to what is given in random tables", () => {
        let tableOutput = [
            ["small rooms"],
            ["ancient hill"],
        ];
        let tableTitle = [
            TableTitles.Structure,
            TableTitles.DungeonEntry,
        ];
        let dungeonFactory = new DungeonFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let continent = dungeonFactory.create();

        expect(continent.structure).toBe("small rooms");
        expect(continent.entryBuilding).toBe("ancient hill");
    })
})