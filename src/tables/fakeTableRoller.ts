import {TableRoller} from "./tableRoler";
import {FakeAllTablesMap} from "./tableRoller.test";
import type {TableTitles} from "./tableTitles";

export class FakeTableRoller extends TableRoller{
    constructor(tableTitles: TableTitles[], tableOutputs: string[][]) {
        super(new FakeAllTablesMap(tableTitles,tableOutputs));

    }
}