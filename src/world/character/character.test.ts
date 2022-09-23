import {describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";
import {Character} from "./character";

describe("Character", () => {

    test("should set name according to builder", () => {
        let character = new Character(new FakeCharacterBuilder("name"))

        expect(character.name).toBe("name");
    })

    test("should throw error when no name is set", () => {
        let fakeCharacterBuilder = new FakeCharacterBuilder(undefined);
        expect(() => {new Character(fakeCharacterBuilder)}).toThrowError("Character name must be set");
    })
})

class FakeCharacterBuilder extends CharacterBuilder{

    constructor(name: string|undefined) {
        super();
        this.charName = name;
    }
}