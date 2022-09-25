import { describe, expect, test } from "vitest";
import { Table } from "./table";
import { TableEntry } from "./tableEntry";

describe("Table", () => {
    test("default", () =>{
        let randomTable= new Table([new TableEntry().withRoleInterval(1,6)]);

        expect(randomTable.diceRole.numberOfDice).toBe(1);
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

    test("should increase dice result automatically when table entries are -1", () =>{
        let entries = [] as TableEntry[];
        entries.push(new TableEntry());
        entries.push(new TableEntry());
        entries.push(new TableEntry());

        let randomTable = new Table(entries);
        expect(randomTable.entries[0].getMin()).toBe(0);
        expect(randomTable.entries[0].getMax()).toBe(0);
        expect(randomTable.entries[1].getMin()).toBe(1);
        expect(randomTable.entries[1].getMax()).toBe(1);
        expect(randomTable.entries[2].getMin()).toBe(2);
        expect(randomTable.entries[2].getMax()).toBe(2);
    })

    test("should return soldier when role with cascade and entry set to soldier without cascade", () => {
        let entry = new TableEntry("soldier");
        let table = new Table([entry]);

        let roleResult = table.roleWithCascade();

        expect(roleResult.text).toBe("soldier");
    })

    test("should return soldier when role with cascade and entry set to soldier with function", () => {
        let entry = new TableEntry("").withFunctionString(getSoldierString);
        let table = new Table([entry]);

        let roleResult = table.roleWithCascade();

        expect(roleResult.text).toBe("soldier");
    })

    test("should return super soldier when role with cascade and entry set to super and soldier with table", () => {
        let otherEntry = new TableEntry("soldier");
        let otherTable = new Table([otherEntry]);

        let entry = new TableEntry("super").withCascadingRole(otherTable);
        let table = new Table([entry]);

        let roleResult = table.roleWithCascade();

        expect(roleResult.text).toBe("super soldier");
    })

    test("should return super soldier when role with cascade and entry set to super and soldier with With", () => {
        let entry = new TableEntry("super").with("soldier");
        let table = new Table([entry]);

        let roleResult = table.roleWithCascade();

        expect(roleResult.text).toBe("super soldier");
    })

})

function getSoldierString(){
    return "soldier";
}