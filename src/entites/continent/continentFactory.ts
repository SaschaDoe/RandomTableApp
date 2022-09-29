import {TableRoller} from "../../tables/tableRoler";
import {Random, randomIntFromInterval} from "../../utils/randomUtils";
import {ContinentBuilder} from "./continentBuilder";
import {generateContinentName} from "../../tables/nameTables/nameGenerator";
import {TableTitles} from "../../tables/tableTitles";
import type {Dungeon} from "../dungeons/dungeon";
import {Factory} from "../factory";
import type {Nation} from "../nations/nation";
import {addNewNationToStore} from "../nations/nationStore";

export let spheresMinInterval = 0;
export let spheresMaxInterval = 7;

export class ContinentFactory extends Factory{
    continentName = "";
    continentId = -1;
    continentDescription = "";
    continentDungeons: Dungeon[];
    continentSpheres: string[];
    nations: Nation[] = [];

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
        let randomNationsNumber = randomIntFromInterval(1,5);
        for(let i = 0; i < randomNationsNumber; i++){
            this.nations.push(addNewNationToStore());
        }
        return new ContinentBuilder()
            .withName(this.continentName)
            .withId(this.continentId)
            .withDescription(this.continentDescription)
            .withDungeons(this.continentDungeons)
            .withSpheres(this.continentSpheres)
            .withNations(this.nations)
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