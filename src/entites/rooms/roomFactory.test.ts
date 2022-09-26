import {describe, expect, test} from "vitest";
import {TableTitles} from "../../tables/tableTitles";
import {ContinentFactory} from "../continent/continentFactory";
import {FakeTableRoller} from "../../tables/fakeTableRoller";
import {FakeRandom} from "../../utils/fakeRandom";
import {DungeonFactory} from "../dungeons/dungeonFactory";
import {RoomFactory} from "./roomFactory";

describe("RoomFactory", () => {
    test("should set default room to what is given in random tables", () => {
        let tableOutput = [
            ["gold"],
            ["kitchen"],
        ];
        let tableTitle = [
            TableTitles.Treasure,
            TableTitles.Furnishing,
        ];
        let roomFactory = new RoomFactory(
            new FakeTableRoller(tableTitle, tableOutput),
            new FakeRandom([1,1,1,1,1,1,1]))

        let room = roomFactory.create();

        expect(room.treasures.length).toBe(1);
        expect(room.treasures[0]).toBe("gold");

        expect(room.furnishing.length).toBe(1);
        expect(room.furnishing[0]).toBe("kitchen");
    })
})