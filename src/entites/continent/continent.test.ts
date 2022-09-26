import {beforeEach, describe, expect, test} from "vitest";
import {ContinentBuilder} from "./continentBuilder";
import {Continent} from "./continent";
import type {Dungeon} from "../dungeons/dungeon";
import {DungeonFactory} from "../dungeons/dungeonFactory";

describe("Continent", () => {
    let continent: Continent;
    let continentWithLists: Continent;
    let dungeon: Dungeon;

    beforeEach(() => {
        let continentBuilder = new ContinentBuilder()
            .withDescription("northern")
            .withName("Atlantis")
            .withId(1)
        continent = continentBuilder.build();

        dungeon = new DungeonFactory().create();


        continentWithLists = continentBuilder
            .withDungeons([dungeon])
            .build();
    })

    test("should set continent attributes according to builder", () => {
        expect(continent.id).toBe(1)
        expect(continent.name).toBe("Atlantis")
        expect(continent.description).toBe("northern")
        expect(continent.dungeons.length).toBe(0);

        expect(continentWithLists.dungeons.length).toBe(1);
        expect(continentWithLists.dungeons[0].id).toBe(dungeon.id);
    })

    test.each([
        [new ContinentBuilder(),"Continents name must be set"],
        [new ContinentBuilder().withName("name"),"Continents description must be set"],
    ])
    ("should throw error when no attribute is set", (continentBuilder,expectedError) => {

        expect(() => {new Continent(continentBuilder)}).toThrowError(expectedError);
    })

    test("toString without lists",() => {
        let characterString = continent.toString();

        expect(characterString).toBe("1 Atlantis a northern continent.");
    })
})