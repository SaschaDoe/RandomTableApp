import {describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";
import {Character} from "./character";
import {CharacterFactory} from "./characterFactory";

describe("Character", () => {

    test("should set characters attributes according to builder", () => {
        let characterBuilder = new CharacterBuilder()
            .withAlignment("good")
            .withName("name")
            .withGender("gender")
            .withNobility("nobel")
            .withMotivation("motivation")
            .withProfession("profession")
            .withRace("human")

        let character = characterBuilder.build();

        expect(character.alignment).toBe("good")
        expect(character.gender).toBe("gender");
        expect(character.name).toBe("name");
        expect(character.nobility).toBe("nobel");
        expect(character.motivation).toBe("motivation");
        expect(character.profession).toBe("profession");
        expect(character.race).toBe("human");
        expect(character.curses.length).toBe(0);
        expect(character.specialFeatures.length).toBe(0);
        expect(character.advantages.length).toBe(0);

        character = characterBuilder
            .withAdvantages(["lucky"])
            .withCurses(["vampire"])
            .withSpecialFeature(["horn"])
            .build();

        expect(character.advantages.length).toBe(1);
        expect(character.advantages[0]).toBe("lucky");

        expect(character.curses.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");

        expect(character.specialFeatures.length).toBe(1);
        expect(character.specialFeatures[0]).toBe("horn");

    })


    test.each([
        [new CharacterBuilder(),"Character alignment must be set"],
        [new CharacterBuilder().withAlignment("good"),"Character gender must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female"),"Character motivation must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withName("femaleName"), "Character motivation must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withMotivation("motivation"), "Character name must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withMotivation("motivation")
            .withName("name"), "Character nobility must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withMotivation("motivation")
            .withName("name")
            .withNobility("nobel"), "Character profession must be set"],
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withMotivation("motivation")
            .withName("name")
            .withNobility("nobel")
            .withProfession("profession"), "Character race must be set"],

    ])
    ("should throw error when no attribute is set", (characterBuilder,expectedError) => {

        expect(() => {new Character(characterBuilder)}).toThrowError(expectedError);
    })

    test("is false when character gender is not equal",()=>{
        let characterFactory = new CharacterFactory();
        characterFactory.characterGender = "female";
        let character1 = characterFactory.create();
        characterFactory.characterGender = "male";
        let character2 = characterFactory.create();

        let isEqual = character1.isEqualTo(character2);

        expect(isEqual).toBe(false);
    })

    test("is true when character is equal",()=>{
        let characterFactory = new CharacterFactory();
        let character1 = characterFactory.create();
        let character2 = characterFactory.create();

        let isEqual = character1.isEqualTo(character2);

        expect(isEqual).toBe(true);
    })
})

