import {BuildingAdjectiveTable} from "../../tables/locationTables/buildingAdjectiveTable";
import {TownFameTable} from "../../tables/townTables/townFameTable";
import {TownSizeTable} from "../../tables/townTables/townSizeTable";
import {TownEventTable} from "../../tables/townTables/townEventTable";
import {Entity} from "../entity";

export class Town extends Entity{
    adjective = new BuildingAdjectiveTable().roleWithCascade().text;
    famousFor = new TownFameTable().roleWithCascade().text;
    size = ""
    lastEvent = new TownEventTable().roleWithCascade().text;
    upcomingEvent = new TownEventTable().roleWithCascade().text;

    constructor() {
        let size = new TownSizeTable().roleWithCascade().text;
        super(size);
        this.size = size;
    }

    toString(){
        let description = `${this.adjective} ${this.size} is famous for ${this.famousFor}.\n`
        description += `There was a ${this.lastEvent} not long ago.\n`
        description += `There will be a ${this.upcomingEvent} in the future.`
        return description;

    }
}