import { describe, expect, test } from "vitest";
import { DiceRole } from "./diceRole";
import { DiceTypes } from "./diceTypes";

describe("DiceRole", () =>{
    test("should 1w6 when default", () => {
        let diceRole = new DiceRole();

        expect(diceRole.multiplier).toBe(1)
        expect(diceRole.diceType).toBe(DiceTypes.w6)
        expect(diceRole.summand).toBe(0)
    })

    test("should 2w6 when multiplier is 2", () => {
        let diceRole = new DiceRole().withMultiplier(2);

        expect(diceRole.multiplier).toBe(2)
        expect(diceRole.diceType).toBe(DiceTypes.w6)
        expect(diceRole.summand).toBe(0)
    })

    test("should 1w20 when dice type is w20", () => {
        let diceRole = new DiceRole().withDiceType(DiceTypes.w20);

        expect(diceRole.multiplier).toBe(1)
        expect(diceRole.diceType).toBe(DiceTypes.w20)
        expect(diceRole.summand).toBe(0)
    })

    test("should return 1 for min result when default", () => {
        let diceRole = new DiceRole();

        expect(diceRole.minResult()).toBe(1);
    })

    test("should return 6 for max result when default", () => {
        let diceRole = new DiceRole();

        expect(diceRole.maxResult()).toBe(6);
    })

    test("should return 12 for max result when 2w6", () => {
        let diceRole = new DiceRole().withMultiplier(2);

        expect(diceRole.maxResult()).toBe(12);
    })

    test("should return 2 for min result when 2w6", () => {
        let diceRole = new DiceRole().withMultiplier(2);

        expect(diceRole.minResult()).toBe(2);
    })

    test("should return 1 for min result when 1w20", () => {
        let diceRole = new DiceRole().withDiceType(DiceTypes.w20);

        expect(diceRole.minResult()).toBe(1);
    })

    test("should return 20 for max result when 1w20", () => {
        let diceRole = new DiceRole().withDiceType(DiceTypes.w20);

        expect(diceRole.maxResult()).toBe(20);
    })

    test("should return 2 for min result when 1w6+1", () => {
        let diceRole = new DiceRole().withSummand(1);

        expect(diceRole.minResult()).toBe(2);
    })

    test("should return 7 for max result when 1w6+1", () => {
        let diceRole = new DiceRole().withSummand(1);

        expect(diceRole.maxResult()).toBe(7);
    })

    test.each([
        ["1w6", new DiceRole()],
        ["1w6+1", new DiceRole().withSummand(1)],
        ["1w6-1", new DiceRole().withSummand(-1)],
        ["2w6", new DiceRole().withMultiplier(2)],
        ["1w20", new DiceRole().withDiceType(DiceTypes.w20)],
    ])
    ('should return %s', (expected, diceRole) => {
        expect(diceRole.toString()).toBe(expected);
    })
})