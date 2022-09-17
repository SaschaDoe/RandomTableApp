import {beforeEach, describe, expect, test} from "vitest";
import {WorldGenerator} from "./worldGenerator";
import {characters} from "../stores/charStore";
import type {Character} from "../character";
import {FakeDice} from "../../utils/fakeDice";
import type {Site} from "../site";
import {sites} from "../stores/siteStore";

describe("WorldGenerator", () => {
    let fakeDice = new FakeDice().withNumberOf(10000,1);
    beforeEach(async () => {
        fakeDice = new FakeDice().withNumberOf(10000,1);
        sites.set([]);
        characters.set([]);

    })

    test("should throw Error when get negative number for initial party number", () => {
        let worldGenerator = new WorldGenerator();
        let numberOfInitialParty = -1;
        expect( () => worldGenerator.generateWorld(numberOfInitialParty))
            .toThrowError("Number of initial party must be greater than 0");
    })

    test("should throw Error when get zero number for initial party number", () => {
        let worldGenerator = new WorldGenerator();
        let numberOfInitialParty = 0;
        expect( () => worldGenerator.generateWorld(numberOfInitialParty))
            .toThrowError("Number of initial party must be greater than 0");
    })

test.each([
    [1,1,1],
    [2,2,2],
    [100,100, 100],
]) ("should generate %i character and %i sites when number of initial party is %i",
    (numberOfInitialParty,expectedNumberOfChars, expectedNumberOfSites) => {
        let worldGenerator = new WorldGenerator();

        worldGenerator.generateWorld(numberOfInitialParty,fakeDice);
        let localChars = [] as Character[];
        let localSites = [] as Site[];
        characters.subscribe(chars => {localChars = chars});
        sites.subscribe(sites => {localSites = sites});

        expect(localChars.length).toBe(expectedNumberOfChars);
        expect(localSites.length).toBe(expectedNumberOfSites);
    })

    test("should generate a site when number of initial party is 1", () => {
        let worldGenerator = new WorldGenerator();
        let numberOfInitialParty = 1

        worldGenerator.generateWorld(numberOfInitialParty,fakeDice);
    })

    test("should generate 1 site when number of initial party is 2 and rolled for same continent", () => {
        let worldGenerator = new WorldGenerator();
        let numberOfInitialParty = 2
        fakeDice.diceResults[25] = 0;
        fakeDice.diceResults[26] = 0;

        worldGenerator.generateWorld(numberOfInitialParty,fakeDice);
        let localSites = [] as Site[];

        sites.subscribe(sites => {localSites = sites});

        expect(localSites.length).toBe(1);
    })
})