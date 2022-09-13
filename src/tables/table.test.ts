import { describe, expect, test } from "vitest";
import { FakeDice } from "../utils/fakeDice";
import { Table } from "./table";
import { TableEntry } from "./tableEntry";
import {RaceTable} from "./charTables/raceTable";

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

    test("should cascade role", () => {
        let fakeDice = new FakeDice().with([4,1]);
        let raceTable = new RaceTable();

        let text = raceTable.roleWithCascade(fakeDice)

        expect(text).toBe("half human half goat");
    })

    test("should reset previously rolled", () => {
        let fakeDice = new FakeDice().with([4,1]);
        let raceTable = new RaceTable();

        let text = raceTable.roleWithCascade(fakeDice)

        expect(raceTable.getAndResetPreviouslyRolled()).toBe("4 ");
        expect(raceTable.getAndResetPreviouslyRolled()).toBe("");
    })

})