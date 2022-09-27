import {beforeEach, describe, expect, test} from "vitest";
import type {Sign} from "./sign";
import {SignBuilder} from "./signBuilder";
import {CharacterFactory} from "../character/characterFactory";
import type {Character} from "../character/character";
import {Monster} from "../monster/monster";

describe("Sign", () => {
    let sign: Sign;
    let character: Character;
    let monster: Monster;
    beforeEach(() => {
        character = new CharacterFactory().create();
        monster = new Monster();
        let signBuilder = new SignBuilder()
            .withName("Madonna")
            .withQuality("broken")
            .withColours(["red"])
            .withType("picture")
            .withEvent(["battle"])
            .withLandscape("mountain")
            .withCharacters([[character,"top"]])
            .withMonsters([[monster,"bottom"]])
            .withBuildings([["house","bottom"]])

        sign = signBuilder.build();
    })

    test("should set sign attributes according to builder", () => {
        expect(sign.name).toBe("Madonna");
        expect(sign.quality).toBe("broken");
        expect(sign.type).toBe("picture");
        expect(sign.landscape).toBe("mountain");

        expect(sign.characters.length).toBe(1);
        expect(sign.monsters.length).toBe(1);
        expect(sign.buildings.length).toBe(1);

        expect(sign.event.length).toBe(1);
        expect(sign.event[0]).toBe("battle");

        expect(sign.colours.length).toBe(1);
        expect(sign.colours[0]).toBe("red");
    })
})