import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {SignBuilder} from "./signBuilder";
import {TableTitles} from "../../tables/tableTitles";
import type {Character} from "../character/character";
import {addNewNSCToCharacterStore} from "../character/charStore";
import type {Monster} from "../monster/monster";
import {addNewMonsterToStore} from "../monster/monsterStore";

export let colourMinInterval = -2;
export let colourMaxInterval = 2;
export let eventMinInterval = 0;
export let eventMaxInterval = 1;
export let charMinInterval = -1;
export let charMaxInterval = 2;
export let monsterMinInterval = -1;
export let monsterMaxInterval = 2;
export let buildingsMinInterval = 0;
export let buildingsMaxInterval = 2;

export class SignFactory{
    private tableRoller: TableRoller;
    private random: Random;

    signName = "";
    signQuality = "";
    signColours: string[] = [];
    signType = "";
    signEvent: string[] = [];
    signLandscape = "";
    signCharacters: [Character, string][] = [];
    signMonsters: [Monster, string][] = [];
    signBuildings: [string, string][] = [];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.setMandatory();
        this.setNonMandatory(colourMinInterval, colourMaxInterval, this.signColours, TableTitles.Colour);
        this.setNonMandatory(eventMinInterval, eventMaxInterval, this.signEvent, TableTitles.HistoricalEvent);

        let randomCharNumber = random.intFromInterval(charMinInterval,charMaxInterval);
        for(let i = 0; i < randomCharNumber; i++){
            this.signCharacters.push([addNewNSCToCharacterStore(),tableRoller.roleFor(TableTitles.Position).text]);
        }

           let randomMonsterNumber = random.intFromInterval(monsterMinInterval,monsterMaxInterval);
           for(let i = 0; i < randomMonsterNumber; i++){
               this.signMonsters.push([addNewMonsterToStore(),tableRoller.roleFor(TableTitles.Position).text]);
           }

                   let randomBuildingsNumber = random.intFromInterval(buildingsMinInterval,buildingsMaxInterval);
                   for(let i = 0; i < randomBuildingsNumber; i++){
                       this.signBuildings.push(
                           [tableRoller.roleFor(TableTitles.Building).text,
                               tableRoller.roleFor(TableTitles.Position).text]);
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

    private setMandatory() {
        this.signName = "no name";
        this.signQuality = this.tableRoller.roleFor(TableTitles.Quality).text;
        this.signType = this.tableRoller.roleFor(TableTitles.Artwork).text;
        this.signLandscape = this.tableRoller.roleFor(TableTitles.Landscape).text;
    }

    create() {
        return new SignBuilder()
            .withName(this.signName)
            .withColours(this.signColours)
            .withQuality(this.signQuality)
            .withType(this.signType)
            .withEvent(this.signEvent)
            .withLandscape(this.signLandscape)
            .withCharacters(this.signCharacters)
            .withMonsters(this.signMonsters)
            .withBuildings(this.signBuildings)
            .build();
    }


    withType(type: string) {
        this.signType = type;
        return this;
    }
}