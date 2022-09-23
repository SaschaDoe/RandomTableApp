import {describe, expect, test} from "vitest";
import {TableTitles} from "./tableTitles";
import {TableRoller} from "./tableRoler";
import {RoleResult} from "./roleResult";
import {Table} from "./table";
import {AllTablesMap} from "./allTablesMap";

describe("TableRoller", () => {


    test.each(
        [
            ["male", [TableTitles.Gender], [["male"]]],
            ["female", [TableTitles.Gender], [["female"]]],
            ["nobel", [TableTitles.Nobility], [["nobel"]]],
        ]
    )("should return table entry %s when given table title %s",
        (expectedEntryText, tableTitles,outputStringsList) => {
        let tableRoller = new TableRoller(new FakeAllTablesMap(tableTitles,outputStringsList));
        let tableTitle = tableTitles[0];
        let roleResult = tableRoller.roleFor(tableTitle)

        expect(roleResult.text).toBe(expectedEntryText);
    })
})

export class FakeAllTablesMap extends AllTablesMap{

    constructor(tableTitles: TableTitles[], outputStringsList: string[][]) {
        super(fakeAllTablesMapFunction(tableTitles,outputStringsList));
    }
}

export function fakeAllTablesMapFunction(tableTitles: TableTitles[], outputStringsList: string[][]){
    let allTablesMap = new Map<TableTitles,Table>();

    for(let i = 0; i < tableTitles.length; i++){
        let tableTitle = tableTitles[i];
        let outputStrings = outputStringsList[i];
        allTablesMap.set(tableTitle, new FakeTable(outputStrings))
    }

    return allTablesMap;
}

class FakeTable extends Table{
    private count: number;
    private readonly results: string[];

    constructor(results: string[]) {
        super();
        this.results = results;
        this.count = 0;
    }

    role(){
        if(this.results.length > this.count){
            let result = this.results[this.count];
            this.count++;
            return new RoleResult(result)
        }else{
            throw Error(`Not enough results just ${this.results.length}`);
        }
    }
}