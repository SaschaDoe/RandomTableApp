import { describe, expect, test } from "vitest";
import { getMaxDiceResult, getMinDiceResult, isInbetween } from "./listUtils";
import {TableEntry} from "../tables/tableEntry";

describe("listUtils", () =>{
    test("should return 6 when given entries with maximum dice role 6", () => {
        let entries = [];
        entries.push(new TableEntry().withRoleInterval(1,6));

        expect(getMaxDiceResult(entries)).toBe(6);
    })

    test("should return 1 when given entries with min dice role 1", () => {
        let entries = [];
        entries.push(new TableEntry().withRoleInterval(1,6));

        expect(getMinDiceResult(entries)).toBe(1);
    })

    test("should return true if number is between", () => {
        expect(isInbetween(1,1,1)).toBe(true);
        expect(isInbetween(1,1,2)).toBe(true);
    })

    test("should return false if number is not between", () => {
        expect(isInbetween(1,2,2)).toBe(false);
        expect(isInbetween(1,0,0)).toBe(false);
    })
})