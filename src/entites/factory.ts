import type {Table} from "../tables/table";
import type {RoleResult} from "../tables/roleResult";
import type {TableTitles} from "../tables/tableTitles";
import type  {Random} from "../utils/randomUtils";
import type {TableRoller} from "../tables/tableRoler";

export class Factory{
    random: Random;
    tableRoller: TableRoller;

    constructor(tableRoller: TableRoller, random: Random) {
        this.tableRoller = tableRoller;
        this.random = random;
    }

    withTable(table: Table, roleResult: RoleResult){
        for(let i = 0; i < table.functions.length; i++){
            let fnk = table.functions[i];
            fnk(this, roleResult);
        }

        return this;
    }

    setNonMandatory(minInterval: number, maxInterval: number, charAttribute: string[], tableTitle: TableTitles) {
        let numberOfAdvantages = this.random.intFromInterval(minInterval,maxInterval);
        if(numberOfAdvantages <= 0 && minInterval === 1){
            numberOfAdvantages = 0;
        }
        for(let i = 0; i < numberOfAdvantages; i++){
            charAttribute.push(this.tableRoller.roleFor(tableTitle).text);
        }
    }

}