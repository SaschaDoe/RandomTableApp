import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";
import {RoomBuilder} from "./roomBuilder";

export const treasureMinInterval = -2;
export const treasureMaxInterval = 3;

export class RoomFactory{
    private tableRoller: TableRoller;
    private random: Random;

    roomTreasures: string[];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random
        this.roomTreasures = [];

        this.setNonMandatory(treasureMinInterval, treasureMaxInterval, this.roomTreasures, TableTitles.Treasure);
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
            .build();
    }
}