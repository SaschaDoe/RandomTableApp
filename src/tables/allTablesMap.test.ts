import { describe, expect, test } from "vitest";
import {AllTablesMap} from "./allTablesMap";
import {TableTitles} from "./tableTitles";
import {GenderTable} from "./charTables/genderTable";

describe("AllTablesMap", () => {

    test("should return GenderTable when called for GenderTable", () => {
        let allTablesMap = new AllTablesMap();

        let table = allTablesMap.getTableOf(TableTitles.Gender);

        expect(table).toBeInstanceOf(GenderTable);
    })

    test("should throw Error when called with table title not in all tables map", () => {
        let allTablesMap = new AllTablesMap();

        expect(() => {allTablesMap.getTableOf(TableTitles.Default)})
            .toThrowError("Table title is not in all tables map");
    })

})