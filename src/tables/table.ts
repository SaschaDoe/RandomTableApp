
import { DiceRole } from "./diceRole";
import {TableTitles} from "./tableTitles";
import {TableEntry} from "./tableEntry";
import {randomIntFromInterval} from "../utils/randomUtils";

export class Table {
    moreThanOnce: boolean;
    probability: number;
    title: TableTitles;
    diceRole: DiceRole;
    entries: TableEntry[];
    functions: ((entity: any, content: TableEntry) => any)[] = [];

    constructor( entries : TableEntry[] = [new TableEntry().withRoleInterval(1,6)],
                 title = TableTitles.Default,
                 diceRole = new DiceRole(),
                 probability = 100,
                 moreThanOnce = false)
    {
        this.entries = entries;
        this.moreThanOnce = moreThanOnce;
        this.diceRole = diceRole;
        this.probability = probability;
        if (entries.length > 0 && entries[0].getMin() === -1){
            this.increaseDiceResults();
        }
        if (this.isEntriesOverlapping(entries)){
            throw RangeError('Entries should not contain overlapping roles and should be descendent');
        }
        this.title = title;
    }

    role(){
        let randomNumber = randomIntFromInterval(0,this.entries.length-1);
        return this.entries[randomNumber];
    }

    roleWithCascade() {
        let entry = this.role();
        let result = this.cascade(entry);
        if(result === undefined){
            throw Error("Entry too small")
        }else{
            let cascadedEntry = entry;
            cascadedEntry.text = result;
            return cascadedEntry;
        }
    }

    private cascade(entry: TableEntry) {
        let fullText = entry.text;
        for (let i = 0; i < entry.cascadingRoles.length; i++) {
            let table = entry.cascadingRoles[i];
            fullText += table.role().text + " ";
        }
        let result = fullText;
        if (entry.cascadingRoles.length != 0) {
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
}