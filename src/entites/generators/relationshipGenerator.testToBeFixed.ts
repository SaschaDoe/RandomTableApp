import {describe, expect, test} from "vitest";
import {FakeDice} from "../../utils/fakeDice";
import {RelationshipGenerator} from "./relationshipGenerator";
import {Character} from "../character/character";
import {RelationshipType} from "../character/relationshipType";
/*
describe("RelationshipGenerator", () => {

    test("should add no relationship when just one character is given", () => {
        let relationshipGenerator = new RelationshipGenerator();
        let character = new Character();

        relationshipGenerator.forParty([character]);

        expect(character.relationships.length).toBe(0)
    })

    test("should add one relationship when two characters are given", () => {
        let relationshipGenerator = new RelationshipGenerator();
        let character1 = new Character();
        let character2 = new Character();

        relationshipGenerator.forParty([character1,character2]);

        expect(character1.relationships.length).toBe(1);
        expect(character2.relationships.length).toBe(1);
        expect(character1.relationships[0]).toBe(character2.relationships[0]);
    })

    test("should use party distribution when calling for party", () => {
        let fakeDice = new FakeDice().with([1,1,1, 1,1,2, 1,2,3, 1,3,6]);
        let relationshipGenerator = new RelationshipGenerator(fakeDice);
        let character1 = new Character();
        let character2 = new Character();
        let character3 = new Character();

        relationshipGenerator.forParty([character1,character2,character3]);

        expect(character1.relationships.length).toBe(2);
        let relationship1 = character1.relationships[0];
        expect(relationship1.firstToSecondType).toBe(RelationshipType.Love);
        expect(relationship1.secondToFirstType).toBe(RelationshipType.Obedient);
        let relationship2 = character1.relationships[1];
        expect(relationship2.firstToSecondType).toBe(RelationshipType.Friendship);
        expect(relationship2.secondToFirstType).toBe(RelationshipType.Acquaintanceship);
    })

    test("should both are just met when one relationship is just met", () => {
        let fakeDice = new FakeDice().with([6,6,2, 1,1,2]);
        let relationshipGenerator = new RelationshipGenerator(fakeDice);
        let character1 = new Character();
        let character2 = new Character();

        relationshipGenerator.forParty([character1,character2]);

        let relationship1 = character1.relationships[0];
        expect(relationship1.firstToSecondType).toBe(RelationshipType.JustMet);
        expect(relationship1.secondToFirstType).toBe(RelationshipType.JustMet);
    })



}) */