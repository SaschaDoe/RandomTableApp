
import {DiceRole, EquallyDistributed} from "./diceRole";
import {TableTitles} from "./tableTitles";
import {TableEntry} from "./tableEntry";
import {randomIntFromInterval} from "../utils/randomUtils";
import {Dice} from "../utils/dice";
import {isBetween} from "../utils/listUtils";
import {TableType} from "./tableType";
import {RoleResult} from "./roleResult";


export class Table {
    moreThanOnce: boolean;
    probability: number;
    title: TableTitles;
    diceRole: DiceRole;
    entries: TableEntry[];
    functions: ((entity: any, roleResult: RoleResult) => any)[] = [];
    tableType: TableType;

    constructor( entries : TableEntry[] = [new TableEntry().withRoleInterval(1,6)],
                 title = TableTitles.Default,
                 tableType = TableType.Character,
                 diceRole = new DiceRole(),
                 probability = 100,
                 moreThanOnce = false)
    {
        this.tableType = tableType;
        this.entries = entries;
        this.moreThanOnce = moreThanOnce;
        this.probability = probability;
        if (entries.length > 0 && entries[0].getMin() === -1){
            this.increaseDiceResults();
        }
        if (this.isEntriesOverlapping(entries)){
            throw RangeError('Entries should not contain overlapping roles and should be descendent');
        }
        if(this.isIncreasingDiceResult()) {
            this.diceRole = new EquallyDistributed();
        }else{
            this.diceRole = diceRole;
        }
        this.title = title;
    }

    role(dice = new Dice()){
        let entry = new TableEntry();
        if(this.isIncreasingDiceResult()){
            let randomNumber = randomIntFromInterval(0,this.entries.length-1);
            entry = this.entries[randomNumber];
        }else{
            let randomNumber = dice.role(this.diceRole);
            for(let i = 0; i < this.entries.length; i++){
                entry = this.entries[i];
                if(isBetween(randomNumber,entry.getMin(), entry.getMax())){
                    break;
                }
            }
        }

        return new RoleResult(entry.text,entry.toString(),entry.cascadingRoles);
    }



    roleWithCascade(dice = new Dice()) {
        let roleResult = this.role(dice);
        let cascadedString = this.cascade(roleResult, dice);
        if(cascadedString === undefined){
            throw Error("Entry too small")
        }else{
            roleResult.setText(cascadedString);
            return roleResult;
        }
    }

    private cascade(roleResult: RoleResult, dice = new Dice()) {
        let fullText = roleResult.text+" ";
        for (let i = 0; i < roleResult.cascadingRoles.length; i++) {
            let table = roleResult.cascadingRoles[i];
            if(table.toString() === "self"){
                fullText += this.role(dice).text + " ";
            }else{
                if (table instanceof Table) {
                    fullText += table.role(dice).text + " ";
                }
            }

        }
        let result = fullText;
        if (roleResult.cascadingRoles.length != 0) {
            result = fullText.slice(0, -1);
        }

        return result;
    }

    private isEntriesOverlapping(entries : TableEntry[]){
        if (entries.length < 2){
            return false;
        }

        for(let i = 1; i < entries.length; i++){
            let lastTableEntry = entries[i-1];
            let currentTableEntry = entries[i];
            
            if(lastTableEntry.getMax() >= currentTableEntry.getMin()){
                return true; 
            }
        }
        
        return false;
    }

    private increaseDiceResults() {
        for(let i = 0; i < this.entries.length; i++){
            let entry = this.entries[i];
            entry.setMinMax(i,i);
        }
    }

    private isIncreasingDiceResult() {
        if(this.entries.length == 0){
            throw Error("No entries for role")
        }else{
            let firstEntry = this.entries[0];
            if(firstEntry.getMin() !== firstEntry.getMax() || firstEntry.getMax() !== 0){
                return false;
            }
            if(this.entries.length === 1){
                return true;
            }
            for(let i = 1; i < this.entries.length; i++){
                let entry = this.entries[i];
                let lastEntry = this.entries[i-1];
                if(lastEntry.getMin() !== lastEntry.getMin() || entry.getMin() !== entry.getMin()){
                    return false;
                }
                let step = entry.getMin() - lastEntry.getMin();
                if(step !== 1){
                    return false;
                }
            }
        }
        return true;
    }
}