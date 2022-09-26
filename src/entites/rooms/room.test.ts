import {beforeEach, describe, expect, test} from "vitest";
import type {Room} from "./room";
import {RoomBuilder} from "./roomBuilder";

describe("Room", () => {
    let room: Room;

    beforeEach(() => {
        let roomBuilder = new RoomBuilder()
            .withTreasures(["gold"])
        room = roomBuilder.build();
    })

    test("should set continent attributes according to builder", () => {

        expect(room.treasures.length).toBe(1);
        expect(room.treasures[0]).toBe("gold");
    })
})