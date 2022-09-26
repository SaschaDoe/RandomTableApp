import {TableRoller} from "../../tables/tableRoler";
import {Random} from "../../utils/randomUtils";
import {ContinentBuilder} from "./continentBuilder";
import {TableTitles} from "../../tables/tableTitles";

export class ContinentFactory{
    private tableRoller: TableRoller;
    private random: Random;
    continentName = "";
    continentId = -1;

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        this.tableRoller = tableRoller
        this.random = random

        this.setMandatoryAttributes();
    }

    create() {
        return new ContinentBuilder()
            .withName(this.continentName)
            .withId(this.continentId)
            .build();
    }

    private setMandatoryAttributes() {
        this.continentName = this.tableRoller.roleFor(TableTitles.GermanMaleName).text;
    }
}