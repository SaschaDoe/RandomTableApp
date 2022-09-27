import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {ContinentBuilder} from "./continentBuilder";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {TableTitles} from "../../tables/tableTitles";
import type {Dungeon} from "../dungeons/dungeon";
import {Factory} from "../factory";

export let spheresMinInterval = 0;
export let spheresMaxInterval = 7;

export class ContinentFactory extends Factory{
    continentName = "";
    continentId = -1;
    continentDescription = "";
    continentDungeons: Dungeon[];
    continentSpheres: string[];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        super(tableRoller, random);
        this.tableRoller = tableRoller
        this.random = random
        this.continentDungeons = [];
        this.continentSpheres = [];
        this.setMandatoryAttributes();
        this.setNonMandatoryAttributes();
    }

    create() {
        return new ContinentBuilder()
            .withName(this.continentName)
            .withId(this.continentId)
            .withDescription(this.continentDescription)
            .withDungeons(this.continentDungeons)
            .withSpheres(this.continentSpheres)
            .build();
    }

    private setMandatoryAttributes() {
        this.continentName = generateContinentName();
        this.continentDescription = this.tableRoller.roleFor(TableTitles.Continent).text;
    }

    withDungeon(dungeon: Dungeon) {
        this.continentDungeons.push(dungeon);
    }

    private setNonMandatoryAttributes() {
        this.setNonMandatory(spheresMinInterval, spheresMaxInterval, this.continentSpheres, TableTitles.Sphere);
    }
}