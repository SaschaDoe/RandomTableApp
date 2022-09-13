import { describe, expect, test } from "vitest";
import { Table } from "./table";
import { TableEntry } from "./tableEntry";

describe("Table", () => {
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

})