import {beforeEach, describe, expect, test} from "vitest";
import {Dungeon} from "./dungeon";
import {DungeonBuilder} from "./dungeonBuilder";
import {RoomFactory} from "../rooms/roomFactory";

describe("Dungeon", () => {
    let dungeon: Dungeon;
    let dungeonWithLists: Dungeon;

    beforeEach(() => {
        let dungeonBuilder = new DungeonBuilder()
            .withId(1)
            .withName("Deepingen")
            .withStructure("many small rooms")
            .withEntryBuilding("ancient hill")
        dungeon = dungeonBuilder.build();

        let room = new RoomFactory().create();

        dungeonWithLists = dungeonBuilder
            .withRooms([room])
            .build();
    })

    test("should set dungeon attributes according to builder", () => {
        expect(dungeon.name).toBe("Deepingen")
        expect(dungeon.structure).toBe("many small rooms")
        expect(dungeon.entryBuilding).toBe("ancient hill")
        expect(dungeon.rooms.length).toBe(0)

        expect(dungeonWithLists.rooms.length).toBe(1);
    })

    test.each([
        [new DungeonBuilder(),"Dungeon name must be set"],
        [new DungeonBuilder().withName("Deepingen"),"Dungeon structure must be set"],
        [new DungeonBuilder()
            .withName("Deepingen")
            .withStructure("small rooms"),"Dungeon entry building must be set"],
    ])
    ("should throw error when no attribute is set", (dungeonBuilder,expectedError) => {

        expect(() => {new Dungeon(dungeonBuilder)}).toThrowError(expectedError);
    })

    test("toString without lists",() => {
        let characterString = dungeon.toString();

        expect(characterString).toBe("1 Deepingen a ancient hill with many small rooms.");
    })
})