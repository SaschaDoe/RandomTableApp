import {beforeEach, describe, expect, test} from "vitest";
import {CharacterBuilder} from "./characterBuilder";
import {Character} from "./character";
import {CharacterFactory} from "./characterFactory";
import {ArtefactFactory} from "../artefacts/artefactFactory";
import type {Artefact} from "../artefacts/artefact";
import type {Continent} from "../continent/continent";
import {ContinentFactory} from "../continent/continentFactory";

describe("Character", () => {
    let character: Character;
    let characterWithoutLists: Character;
    let artefactWand: Artefact;
    let artefactShield: Artefact;
    let continent: Continent;
    let characterWithTwoLists: Character;

    beforeEach(() => {
        let continentFactory = new ContinentFactory();
        continentFactory.continentId = 1;
        continentFactory.continentName = "Continenta"
        continent = continentFactory.create()
        let characterBuilder = new CharacterBuilder()
            .withAlignment("good")
            .withName("kassandra")
            .withGender("female")
            .withNobility("nobel")
            .withMotivation("to protect the earth")
            .withProfession("soldier")
            .withRace("human")
            .withContinent(continent)
            .withIsHigherPower(false)
            .withTrope("superman");

        characterWithoutLists = characterBuilder.build();

        let artefactFactory = new ArtefactFactory();
        artefactFactory.artefactId = 2;
        artefactFactory.artefactName = "wand";
        artefactWand = artefactFactory.create()

        let artefactFactory2 = new ArtefactFactory();
        artefactFactory2.artefactId = 3;
        artefactFactory2.artefactName = "shield";
        artefactShield = artefactFactory2.create()

        character = characterBuilder
            .withAdvantages(["lucky"])
            .withDisadvantages(["unlucky"])
            .withCurses(["vampire"])
            .withSpecialFeature(["horns"])
            .withArtefacts([artefactWand])
            .withTalents(["fishing"])
            .withMagicalTalents(["fireball"])
            .build();
        characterWithTwoLists = characterBuilder
            .withAdvantages(["quick"])
            .withDisadvantages(["slow"])
            .withCurses(["ghost"])
            .withSpecialFeature(["blue skin"])
            .withArtefacts([artefactShield])
            .withTalents(["climbing"])
            .withMagicalTalents(["iceball"])
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
        expect(characterWithoutLists.trope).toBe("superman");

        expect(characterWithoutLists.isHigherPower).toBe(false);
        expect(characterWithoutLists.homeContinent).toBe(continent);
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
        expect(character.specialFeatures[0]).toBe("horns");

        expect(character.talents.length).toBe(1);
        expect(character.talents[0]).toBe("fishing");

        expect(character.magicalTalents.length).toBe(1);
        expect(character.magicalTalents[0]).toBe("fireball");

        expect(character.artefacts.length).toBe(1);
        let isEqual = artefactWand.isEqualTo(character.artefacts[0]);
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

        expect(characterStringWithoutId).toBe(" kassandra a good nobel female human soldier. She is from \"1 Continenta\" and has the motivation to protect the earth")
    })

    test("toString with lists length 1",() => {
        let characterString = character.toString();
        let characterStringWithoutId = characterString.slice(characterString.indexOf(" "));

        expect(characterStringWithoutId).toBe(" kassandra a good nobel female human vampire soldier with horns." +
            " She is from \"1 Continenta\"" +
            " and has the motivation to protect the earth. Her advantage is that she is lucky." +
            " Her disadvantage is that she is unlucky." +
            " Her talent is fishing." +
            " Her magical talent is fireball." +
            " She has the artefact \"2 wand\" with her.")
    })

    test("toString with lists length 2",() => {
        let characterString = characterWithTwoLists.toString();
        let characterStringWithoutId = characterString.slice(characterString.indexOf(" "));

        expect(characterStringWithoutId).toBe(" kassandra a good nobel female human vampire ghost soldier with horns and blue skin." +
            " She is from \"1 Continenta\"" +
            " and has the motivation to protect the earth." +
            " Her advantages are that she is lucky and that she is quick." +
            " Her disadvantages are that she is unlucky and that she is slow." +
            " Her talents are fishing and climbing." +
            " Her magical talents are fireball and iceball." +
            " She has the artefacts \"2 wand\" and \"3 shield\" with her.")
    })
})

