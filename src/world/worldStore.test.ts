import { describe, expect, test } from "vitest";
import {addParty, characters} from "./worldStore";

describe("WorldStore", () => {
    test("should add 5 characters when add party with 5", () => {
        addParty(5);
        let chars = [];
        characters.subscribe((characters) => {
            chars = characters;
        })

        expect(chars.length).toBe(5);
    })

})