import {describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";
import {Character} from "./character";

describe("Character", () => {

    test("should set characters attributes according to builder", () => {
        let characterBuilder = new CharacterBuilder()
            .withName("name")
            .withGender("gender")
            .withNobility("nobel")
            .withMotivation("motivation")
            .withProfession("profession")
            .withRace("human")

        let character = characterBuilder.build();

        expect(character.gender).toBe("gender");
        expect(character.name).toBe("name");
        expect(character.nobility).toBe("nobel");
        expect(character.motivation).toBe("motivation");
        expect(character.profession).toBe("profession");
        expect(character.race).toBe("human");
        expect(character.curses.length).toBe(0);

        character = characterBuilder
            .withCurses(["vampire"])
            .build();

        expect(character.curses.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");

    })


    test.each([
        [new CharacterBuilder(),"Character gender must be set"],
        [new CharacterBuilder().withGender("female"),"Character motivation must be set"],
        [new CharacterBuilder()
            .withGender("female")
            .withName("femaleName"), "Character motivation must be set"],
        [new CharacterBuilder()
            .withGender("female")
            .withMotivation("motivation"), "Character name must be set"],
        [new CharacterBuilder()
            .withGender("female")
            .withMotivation("motivation")
            .withName("name"), "Character nobility must be set"],
        [new CharacterBuilder()
            .withGender("female")
            .withMotivation("motivation")
            .withName("name")
            .withNobility("nobel"), "Character profession must be set"],
        [new CharacterBuilder()
            .withGender("female")
            .withMotivation("motivation")
            .withName("name")
            .withNobility("nobel")
            .withProfession("profession"), "Character race must be set"],

    ])
    ("should throw error when no attribute is set", (characterBuilder,expectedError) => {

        expect(() => {new Character(characterBuilder)}).toThrowError(expectedError);
    })
})

