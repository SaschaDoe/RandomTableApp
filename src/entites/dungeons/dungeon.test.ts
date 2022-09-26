import {beforeEach, describe, expect, test} from "vitest";
import {Dungeon} from "./dungeon";
import {DungeonBuilder} from "./dungeonBuilder";

describe("Dungeon", () => {
    let dungeon: Dungeon;

    beforeEach(() => {
        let dungeonBuilder = new DungeonBuilder()
            .withId(1)
            .withName("Deepingen")
            .withStructure("many small rooms")
        dungeon = dungeonBuilder.build();
    })

    test("should set dungeon attributes according to builder", () => {
        expect(dungeon.name).toBe("Deepingen")
        expect(dungeon.structure).toBe("many small rooms")
    })

    test.each([
        [new DungeonBuilder(),"Dungeon name must be set"],
        [new DungeonBuilder().withName("Deepingen"),"Dungeon structure must be set"],
    ])
    ("should throw error when no attribute is set", (dungeonBuilder,expectedError) => {

        expect(() => {new Dungeon(dungeonBuilder)}).toThrowError(expectedError);
    })

    test("toString without lists",() => {
        let characterString = dungeon.toString();

        expect(characterString).toBe("1 Deepingen a dungeon with many small rooms.");
    })
})