import {TableTitles} from "./tableTitles";
import type {Table} from "./table";
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

export class AllTablesMap{
    private readonly allTablesMap: Map<TableTitles, Table>;

    constructor(allTablesMap = new Map<TableTitles, Table>()) {
        this.allTablesMap = allTablesMap;
        if(this.allTablesMap.size === 0){
            this.initializeAllTablesMap()
        }
    }

    getTableOf(tableTitle: TableTitles){
        let table = this.allTablesMap.get(tableTitle);
        if(table === undefined){
            throw new Error(`Table title: ${tableTitle} is not in all tables map`);
        }
        return table;
    }

    private initializeAllTablesMap() {
        this.allTablesMap.set(TableTitles.Gender, new GenderTable());
        this.allTablesMap.set(TableTitles.GermanFemaleNames, new GermanFemaleNameTable());
        this.allTablesMap.set(TableTitles.GermanMaleName, new GermanMaleNameTable());
        this.allTablesMap.set(TableTitles.SpecialFeatures, new SpecialFeaturesTable());
        this.allTablesMap.set(TableTitles.Motivation, new MotivationTable());
        this.allTablesMap.set(TableTitles.Curse, new CurseTable());
        this.allTablesMap.set(TableTitles.Nobility, new NobilityTable());
        this.allTablesMap.set(TableTitles.Alignment, new AlignmentTable());
        this.allTablesMap.set(TableTitles.Profession, new ProfessionTable());
        this.allTablesMap.set(TableTitles.Race, new RaceTable());
        this.allTablesMap.set(TableTitles.Advantages, new AdvantageTable());
    }
}


