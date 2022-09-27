import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {SignBuilder} from "./signBuilder";
import {TableTitles} from "../../tables/tableTitles";

export let colourMinInterval = -2;
export let colourMaxInterval = 2;

export class SignFactory{
    private tableRoller: TableRoller;
    private random: Random;

    signName: string;
    signColours: string[] = [];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.signName = "no name";

        this.setNonMandatory(colourMinInterval, colourMaxInterval, this.signColours, TableTitles.Colour);
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
        return new SignBuilder()
            .withName(this.signName)
            .withColours(this.signColours)
            .build();
    }
}