import type {TableTitles} from "./tableTitles";
import {AllTablesMap} from "./allTablesMap";

export class TableRoller{
    private allTableMap: AllTablesMap;

    constructor(allTableMap = new AllTablesMap()) {
        this.allTableMap = allTableMap;
    }

    roleFor(tableTitle: TableTitles) {
        let table = this.allTableMap.getTableOf(tableTitle);
        return table.roleWithCascade()
    }
}