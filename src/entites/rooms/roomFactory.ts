import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";
import {RoomBuilder} from "./roomBuilder";
import {Monster} from "../monster/monster";
import type {Sign} from "../signs/sign";
import {SignFactory} from "../signs/signFactory";

export const treasureMinInterval = -5;
export const treasureMaxInterval = 3;
export const furnishingMinInterval = 0;
export const furnishingMaxInterval = 3
export const obstacleMinInterval = -3;
export const obstacleMaxInterval = 3;
export const trapsMinInterval = -3;
export const trapsMaxInterval = 3;
export const monsterMinInterval = -3;
export const monsterMaxInterval = 2;
export const artworkMinInterval = -3;
export const artworkMaxInterval = 1;
export const transitionMinInterval = 1;
export const transitionMaxInterval = 3;
export class RoomFactory{
    private tableRoller: TableRoller;
    private random: Random;

    roomTreasures: string[];
    roomFurnishing: string[];
    roomObstacles: string[];
    roomTraps: string[];
    roomEncounters: string[];
    roomMonsters: Monster[];
    roomArtworks: Sign[];
    roomTransitions: string[];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random
        this.roomTreasures = [];
        this.roomFurnishing = [];
        this.roomObstacles = [];
        this.roomTraps = [];
        this.roomEncounters = [];
        this.roomMonsters = [];
        this.roomArtworks = [];
        this.roomTransitions = [];
        this.setNonMandatory(transitionMinInterval, transitionMaxInterval, this.roomTransitions, TableTitles.Transition)
        this.setNonMandatory(treasureMinInterval, treasureMaxInterval, this.roomTreasures, TableTitles.Treasure);
        this.setNonMandatory(furnishingMinInterval, furnishingMaxInterval, this.roomFurnishing, TableTitles.Furnishing);
        this.setNonMandatory(obstacleMinInterval, obstacleMaxInterval, this.roomObstacles, TableTitles.Obstacle);
        this.setNonMandatory(trapsMinInterval, trapsMaxInterval, this.roomTraps, TableTitles.Trap);

        this.setArtworks();
        this.setMonsterEncounters();
    }

    private setArtworks() {
        let number = this.random.intFromInterval(artworkMinInterval, artworkMaxInterval);
        if (number <= 0) {
            number = 0;
        }
        for (let i = 0; i < number; i++) {
            this.roomArtworks.push(new SignFactory().create());
        }
    }

    private setMonsterEncounters() {
        let randomMonsterNumber = this.random.intFromInterval(monsterMinInterval, monsterMaxInterval);
        for (let i = 0; i < randomMonsterNumber; i++) {
            this.roomMonsters.push(new Monster());
        }
        for (let i = 0; i < this.roomMonsters.length; i++) {
            this.roomEncounters.push(this.tableRoller.roleFor(TableTitles.MonsterEncounterType).text);
        }
    }

    private setNonMandatory(minInterval: number, maxInterval: number, attributeList: string[], tableTitle: TableTitles) {
        let number = this.random.intFromInterval(minInterval,maxInterval);
        if(number <= 0 && minInterval === 1){
            number = 0;
        }
        for(let i = 0; i < number; i++){
            attributeList.push(this.tableRoller.roleFor(tableTitle).text);
        }
    }

    create() {
        return new RoomBuilder()
            .withTreasures(this.roomTreasures)
            .withFurnishing(this.roomFurnishing)
            .withObstacles(this.roomObstacles)
            .withTraps(this.roomTraps)
            .withEncounters(this.roomEncounters)
            .withMonsters(this.roomMonsters)
            .withArtworks(this.roomArtworks)
            .withTransitions(this.roomTransitions)
            .build();
    }
}