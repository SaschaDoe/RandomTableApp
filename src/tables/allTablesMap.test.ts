import {describe, expect, test} from "vitest";
import {AllTablesMap} from "./allTablesMap";
import {TableTitles} from "./tableTitles";
import {GenderTable} from "./charTables/genderTable";
import {GermanFemaleNameTable} from "./nameTables/germanFemaleNameTable";
import {GermanMaleNameTable} from "./nameTables/germanMaleNameTable";
import {SpecialFeaturesTable} from "./charTables/specialFeaturesTable";
import {MotivationTable} from "./charTables/motivationTable";
import {CurseTable} from "./charTables/curseTable";
import {NobilityTable} from "./charTables/nobilityTable";
import {AlignmentTable} from "./charTables/alignmentTable";
import {ProfessionTable} from "./charTables/professionTable";
import {RaceTable} from "./charTables/raceTable";
import {AdvantageTable} from "./charTables/advantageTable";

describe("AllTablesMap", () => {

    test("should return GenderTable when called for GenderTable", () => {
        let allTablesMap = new AllTablesMap();

        let table = allTablesMap.getTableOf(TableTitles.Gender);

        expect(table).toBeInstanceOf(GenderTable);
    })

    test("should throw Error when called with table title not in all tables map", () => {
        let allTablesMap = new AllTablesMap();

        expect(() => {allTablesMap.getTableOf(TableTitles.Default)})
            .toThrowError("Table title: default title is not in all tables map")
    })

    test.each(
        testInput()
    )
    ("should return specific table type when called for %s", (tt , tableType) => {
        let tableTitle = tt as TableTitles;
        let allTablesMap = new AllTablesMap();

            let table = allTablesMap.getTableOf(tableTitle);

            expect(table).toBeInstanceOf(tableType);
    })
})

function testInput(){
    return [
        [TableTitles.GermanFemaleNames, GermanFemaleNameTable],
        [TableTitles.Gender, GenderTable],
        [TableTitles.GermanMaleName, GermanMaleNameTable],
        [TableTitles.SpecialFeatures, SpecialFeaturesTable],
        [TableTitles.Motivation, MotivationTable],
        [TableTitles.Curse, CurseTable],
        [TableTitles.Nobility, NobilityTable],
        [TableTitles.Alignment, AlignmentTable],
        [TableTitles.Profession, ProfessionTable],
        [TableTitles.Race, RaceTable],
        [TableTitles.Advantages, AdvantageTable],
    ]
}