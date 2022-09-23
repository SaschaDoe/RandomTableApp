import {describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";

describe("CharacterBuilder", () => {

    test("should build character with name when name is set", () => {
        let character = new CharacterBuilder()
            .withName("name")
            .build();

        expect(character.name).toBe("name");
    })

    test("should have no default character name", () => {
        let characterBuilder = new CharacterBuilder()

        expect(() => characterBuilder.build()).toThrowError("Character name must be set");
    })
})