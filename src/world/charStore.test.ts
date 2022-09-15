import { describe, expect, test } from "vitest";
import {connectChars} from "./charStore";
import {Character} from "./character";
import {Relationship} from "./relationship";
import {RelationshipType} from "./relationshipType";

describe("CharStore", () => {

    test("should do nothing when no char or 1 char is given to connectChars", () => {
        connectChars([]);
        let char = new Character();
        connectChars([char])

        expect(char.relationships.length).toBe(0);
    })

    test("should give two relationships when two chars are given to connectChars", () => {
        let firstChar = new Character();
        let secondChar = new Character();

        connectChars([firstChar, secondChar]);

        expect(firstChar.relationships.length).toBe(1);
        expect(firstChar.relationships[0].getOtherChar(firstChar)).toBe(secondChar);
        expect(secondChar.relationships.length).toBe(1);
        expect(secondChar.relationships[0].getOtherChar(secondChar)).toBe(firstChar);
    })

    test("should give three relationships when three chars are given to connectChars", () => {
        let firstChar = new Character();
        let secondChar = new Character();
        let thirdChar = new Character();

        connectChars([firstChar, secondChar,thirdChar]);

        expect(firstChar.relationships.length).toBe(2);
        expect(firstChar.relationships[0].getOtherChar(firstChar)).toBe(secondChar);
        expect(firstChar.relationships[1].getOtherChar(firstChar)).toBe(thirdChar);

        expect(secondChar.relationships.length).toBe(2);
        expect(secondChar.relationships[0].getOtherChar(secondChar)).toBe(firstChar);
        expect(secondChar.relationships[1].getOtherChar(secondChar)).toBe(thirdChar);

        expect(thirdChar.relationships.length).toBe(2);
        expect(thirdChar.relationships[0].getOtherChar(thirdChar)).toBe(firstChar);
        expect(thirdChar.relationships[1].getOtherChar(thirdChar)).toBe(secondChar);
    })

    test("should give three relationships when three chars with relationships are given to connectChars", () => {
        let firstChar = new Character();
        let secondChar = new Character();
        let thirdChar = new Character();

        let relationship = new Relationship(firstChar,secondChar,RelationshipType.Obedient,RelationshipType.Acquaintanceship);
        firstChar.relationships.push(relationship);
        secondChar.relationships.push(relationship);

        connectChars([firstChar, secondChar,thirdChar]);

        expect(firstChar.relationships.length).toBe(2);
        expect(firstChar.relationships[0].getOtherChar(firstChar)).toBe(secondChar);
        expect(firstChar.relationships[1].getOtherChar(firstChar)).toBe(thirdChar);

        expect(secondChar.relationships.length).toBe(2);
        expect(secondChar.relationships[0].getOtherChar(secondChar)).toBe(firstChar);
        expect(secondChar.relationships[1].getOtherChar(secondChar)).toBe(thirdChar);

        expect(thirdChar.relationships.length).toBe(2);
        expect(thirdChar.relationships[0].getOtherChar(thirdChar)).toBe(firstChar);
        expect(thirdChar.relationships[1].getOtherChar(thirdChar)).toBe(secondChar);
    })

})