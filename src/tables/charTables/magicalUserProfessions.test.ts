import {describe, expect, test} from "vitest";
import {isMagicalProfession, MagicUserProfessions} from "./magicUserProfessions";

describe("MagicalUsersProfessions", () => {
    test.each([
            [true, MagicUserProfessions.witch.toString()],
            [false, "soldier"],
        ]
    )("should %s when isMagicUserProfession is called with profession %s", (expectedBool,profession) => {
        let isMagicalUserProfession = isMagicalProfession(profession)

        expect(isMagicalUserProfession).toBe(expectedBool);
    })
})

