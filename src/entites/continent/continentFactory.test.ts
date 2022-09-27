import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {DungeonFactory} from "../dungeons/dungeonFactory";
import {ContinentFactory} from "./continentFactory";

describe("ContinentFactory", () => {
    test("should set default content to what is given in random tables", () => {
        let tableOutput = [
            ["northern"],
            ["fey"]
        ];
        let tableTitle = [
            TableTitles.Continent,
            TableTitles.Sphere,
        ];
        let continentFactory = new ContinentFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let continent = continentFactory.create();

        expect(continent.description).toBe("northern");
        expect(continent.dungeons.length).toBe(0)

        let dungeon = new DungeonFactory().create();
        continentFactory.withDungeon(dungeon);
        continent = continentFactory.create();

        expect(continent.dungeons.length).toBe(1);
        expect(continent.dungeons[0].id).toBe(dungeon.id);
    })
})