import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {RoomFactory} from "./roomFactory";

describe("RoomFactory", () => {
    test("should set default room to what is given in random tables", () => {
        let tableOutput = [
            ["gold"],
            ["kitchen"],
            ["wall"],
            ["stone"],
            ["far away"],
        ];
        let tableTitle = [
            TableTitles.Treasure,
            TableTitles.Furnishing,
            TableTitles.Obstacle,
            TableTitles.Trap,
            TableTitles.MonsterEncounterType,
        ];
        let roomFactory = new RoomFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1,1]))
        let room = roomFactory
            .create();

        expect(room.treasures.length).toBe(1);
        expect(room.treasures[0]).toBe("gold");

        expect(room.furnishing.length).toBe(1);
        expect(room.furnishing[0]).toBe("kitchen");

        expect(room.obstacles.length).toBe(1);
        expect(room.obstacles[0]).toBe("wall");

        expect(room.traps.length).toBe(1);
        expect(room.traps[0]).toBe("stone");

        expect(room.encounters.length).toBe(1);
        expect(room.encounters[0]).toBe("far away");

        expect(room.monsters.length).toBe(1);
    })
})