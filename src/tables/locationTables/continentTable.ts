import {Table} from "../table";
import {TableEntry} from "../tableEntry";
import {TableTitles} from "../tableTitles";
import {SizeTable} from "./sizeTable";
import {LocationTable} from "./locationTable";
import {WeatherTable} from "./weatherTable";
import {TableType} from "../tableType";
import type {Site} from "../../world/site";
import type {RoleResult} from "../roleResult";

export class ContinentTable extends Table{
    constructor(){
        let entries = [] as TableEntry[];
        entries.push(new TableEntry("continent that is ")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new LocationTable())
            .withCascadingRole(new WeatherTable()));
        entries.push(new TableEntry("continent that is ")
            .withCascadingRole(new SizeTable())
            .withCascadingRole(new LocationTable()));
        super(entries, TableTitles.Continent);
        this.functions.push(changeDescription)
        this.tableType = TableType.Location;
    }
}

export function changeDescription(location: Site, roleResult: RoleResult){
    location.description = roleResult.text;
    return location;
}