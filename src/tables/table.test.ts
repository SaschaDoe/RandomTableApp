import { describe, expect, test } from "vitest";
import { FakeDice } from "../utils/fakeDice";
import { Table } from "./table";
import { TableEntry } from "./tableEntry";

describe("RandomTable", () => {
    test("default", () =>{
        let randomTable= new Table([new TableEntry().withRoleInterval(1,6)]);

        expect(randomTable.diceRole.multiplier).toBe(1);
        expect(randomTable.entries.length).toBe(1);
        expect(randomTable.title).toBe("default title");
    })

    test("should throw error when table entries role intervals overlap", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry().withRoleInterval(1,2));
        entries.push(new TableEntry().withRoleInterval(2,2));
        entries.push(new TableEntry().withRoleInterval(3,6));

        expect(() => new Table(entries)).toThrowError('Entries should not contain overlapping roles and should be descendent');
    })

    test("should have three entries when given three entries", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry().withRoleInterval(1,3));
        entries.push(new TableEntry().withRoleInterval(4,5));
        entries.push(new TableEntry().withRoleInterval(6,6));

        let randomTable = new Table(entries);
        expect(randomTable.entries.length).toBe(3);
    })
        

    test("should throw error when table entries dont cover all possible dice results", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry().withRoleInterval(1,5));

        expect(() => new Table(entries)).toThrowError('Entries should cover maximum');
    })

    test("should throw error when entries dont cover minimum", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry().withRoleInterval(2,6));

        expect(() => new Table(entries)).toThrowError('Entries should cover minimum');
    })

    test("should throw error when table entries cover in the middle not all dice results", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry().withRoleInterval(1,1));
        entries.push(new TableEntry().withRoleInterval(3,6));

        expect(() => new Table(entries)).toThrowError('Entries should have no gaps');
    })

    test("should give first entry when rolled 1", () => {
        let fakeDice = new FakeDice().with([1]);
        let entries = []
        entries.push(new TableEntry().withRoleInterval(1,1));
        entries.push(new TableEntry().withRoleInterval(2,6));

        let randomTable = new Table(entries);

        let actualEntry = randomTable.role(fakeDice);

        expect(actualEntry).toBe(entries[0]);
    })

    test("should give second entry when rolled 6", () => {
        let fakeDice = new FakeDice().with([6]);
        let entries = []
        let firstEntry = new TableEntry().withRoleInterval(1,1)
        entries.push(firstEntry);
        let secondEntry = new TableEntry().withRoleInterval(2,6)
        entries.push(secondEntry);

        let randomTable = new Table(entries);

        let actualEntry = randomTable.role(fakeDice);
        expect(actualEntry).toBe(secondEntry);
    })

})