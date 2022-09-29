import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {TableType} from "../tableType";
import {MaterialsTable} from "../artefactTables/materialsTable";
import {JewelryTable} from "../artefactTables/jewelryTable";
import {ProfaneArtefactTable} from "../artefactTables/profaneArtefactTable";
import {MealTable} from "./mealTable";
import {WeaponTable} from "../artefactTables/weaponTable";
import {ArtefactTable} from "../artefactTables/artefactTable";

export class NationResourceTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("farming"))
        entries.push(new TableEntry("no resources"))
        entries.push(new TableEntry("").withCascadingRole(new MealTable()))
        entries.push(new TableEntry("minerals").withCascadingRole(new MaterialsTable()))
        entries.push(new TableEntry("skilled people"));
        entries.push(new TableEntry("").withCascadingRole(new ArtefactTable()));
        entries.push(new TableEntry("").withCascadingRole(new WeaponTable()));
        entries.push(new TableEntry("jewelry").withCascadingRole(new JewelryTable()));
        entries.push(new TableEntry("").withCascadingRole(new ProfaneArtefactTable()));
        super(entries, TableTitles.Resource, TableType.Other);
    }
}