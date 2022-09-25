import {beforeEach, describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";
import {Character} from "./character";
import {CharacterFactory} from "./characterFactory";
import {ArtefactFactory} from "../artefacts/artefactFactory";
import {Site} from "../site/site";
import type {Artefact} from "../artefacts/artefact";

describe("Character", () => {
    let character: Character;
    let characterWithoutLists: Character;
    let artefact: Artefact;
    let site: Site;

    beforeEach(() => {
        site = new Site();
        let characterBuilder = new CharacterBuilder()
            .withAlignment("good")
            .withName("kassandra")
            .withGender("female")
            .withNobility("nobel")
            .withMotivation("to protect the earth")
            .withProfession("soldier")
            .withRace("human")
            .withContinent(site)
            .withIsHigherPower(false);

        characterWithoutLists = characterBuilder.build();

        artefact = new ArtefactFactory().create()
        character = characterBuilder
            .withAdvantages(["lucky"])
            .withCurses(["vampire"])
            .withSpecialFeature(["horn"])
            .withArtefacts([artefact])
            .withTalents(["fishing"])
            .withMagicalTalents(["fireball"])
            .build();
    })


    test("should set characters attributes according to builder", () => {
        expect(characterWithoutLists.alignment).toBe("good")
        expect(characterWithoutLists.gender).toBe("female");
        expect(characterWithoutLists.name).toBe("kassandra");
        expect(characterWithoutLists.nobility).toBe("nobel");
        expect(characterWithoutLists.motivation).toBe("to protect the earth");
        expect(characterWithoutLists.profession).toBe("soldier");
        expect(characterWithoutLists.race).toBe("human");
        expect(characterWithoutLists.isHigherPower).toBe(false);
        expect(characterWithoutLists.homeContinent).toBe(site);
        expect(characterWithoutLists.curses.length).toBe(0);
        expect(characterWithoutLists.specialFeatures.length).toBe(0);
        expect(characterWithoutLists.advantages.length).toBe(0);
        expect(characterWithoutLists.artefacts.length).toBe(0);
        expect(characterWithoutLists.magicalTalents.length).toBe(0);

        expect(character.advantages.length).toBe(1);
        expect(character.advantages[0]).toBe("lucky");

        expect(character.curses.length).toBe(1);
        expect(character.curses[0]).toBe("vampire");

        expect(character.specialFeatures.length).toBe(1);
        expect(character.specialFeatures[0]).toBe("horn");

        expect(character.talents.length).toBe(1);
        expect(character.talents[0]).toBe("fishing");

        expect(character.magicalTalents.length).toBe(1);
        expect(character.magicalTalents[0]).toBe("fireball");

        expect(character.artefacts.length).toBe(1);
        let isEqual = artefact.isEqualTo(character.artefacts[0]);
        expect(isEqual).toBe(true);

    })

    test.each([
        [new CharacterBuilder(),"Character gender must be set"],
        [new CharacterBuilder().withGender("good"),"Character name must be set"],
        [new CharacterBuilder()
            .withName("good")
            .withGender("female"),"Character alignment must be set"],
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
        [new CharacterBuilder()
            .withAlignment("good")
            .withGender("female")
            .withMotivation("motivation")
            .withName("name")
            .withNobility("nobel")
            .withProfession("profession")
            .withRace("human"), "Character home continent must be set"],

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

    test("toString without lists",() => {
        let characterString = characterWithoutLists.toString();
        let characterStringWithoutId = characterString.slice(characterString.indexOf(" "));

        expect(characterStringWithoutId).toBe(" kassandra a good nobel female human soldier from TODO with the motivation to protect the earth")
    })
})

