import { describe, expect, test } from "vitest";
import {TableEntry} from './tableEntry'
import {AnimalTable} from "./charTables/animalTable";

describe("RandomTableEntry", () => {

    test("should min role 1 when with min role 1", () =>{
        let randomTableEntry = new TableEntry().withRoleInterval(1,1);

        expect(randomTableEntry.minRole).toBe(1);
        expect(randomTableEntry.maxRole).toBe(1);
        expect(randomTableEntry.text).toBe("-");
    })

    test("should max role 1 when with max role 1", () =>{
        let randomTableEntry = new TableEntry().withRoleInterval(0,1);

        expect(randomTableEntry.minRole).toBe(0);
        expect(randomTableEntry.maxRole).toBe(1);
        expect(randomTableEntry.text).toBe("-");
    })

    test("should throw error when min is bigger than max", () =>{
        let randomTableEntry = new TableEntry();

        expect(() => randomTableEntry.withRoleInterval(1,0)).toThrowError('Max should be equal or bigger than min')
    })

    test("should alter contentText when calling withContentText", () =>{
        let randomTableEntry = new TableEntry("Hello");

        expect(randomTableEntry.text).toBe("Hello");
    })

    test("should have cascading Role", () =>{
        let randomTableEntry = new TableEntry("Hello").withCascadingRole(new AnimalTable());

        expect(randomTableEntry.cascadingRoles.length).toBe(1);
    })

    test.each([
        ["-1", new TableEntry()],
        ["1-2", new TableEntry().withRoleInterval(1,2)],
        ["1", new TableEntry().withRoleInterval(1,1)],
    ])
    ('should return %s', (expected, tableEntry) => {
        expect(tableEntry.toString()).toBe(expected);
    })
})