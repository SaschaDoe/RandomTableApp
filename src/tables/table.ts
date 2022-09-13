
import { DiceRole } from "./diceRole";
import { isBetween } from "../utils/listUtils";
import { Dice } from "../utils/dice";
import {TableTitles} from "./tableTitles";
import {TableEntry} from "./tableEntry";

export class Table {
    probability: number;
    title: TableTitles;
    diceRole: DiceRole;
    entries: TableEntry[];
    functions: ((entity: any, content: TableEntry) => any)[] = [];
    private previouslyRolled: string;

    constructor( entries : TableEntry[] = [new TableEntry().withRoleInterval(1,6)],
                 title = TableTitles.Default,
                 diceRole = new DiceRole(),
                 probability = 100)
    {
        this.diceRole = diceRole;
        this.probability = probability;
        if (this.isEntriesOverlapping(entries)){
            throw RangeError('Entries should not contain overlapping roles and should be descendent');
        }
        this.previouslyRolled = "";
        this.title = title;
        this.entries = entries;
    }

    getAndResetPreviouslyRolled(){
        let previouslyRolled = this.previouslyRolled;
        this.previouslyRolled = "";
        return previouslyRolled;
    }

    role(dice = new Dice()){
        let randomNumber = dice.role(this.diceRole);
        this.previouslyRolled = `${randomNumber} `;
        for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i];

            if(isBetween(randomNumber, entry.minRole, entry.maxRole)){
                return entry;
            }
        }
        return this.entries[0];
    }

    roleWithCascade(dice = new Dice()) {
        let entry = this.role(dice);
        let result = this.cascade(entry, dice);
        if(result === undefined){
            throw Error("Entry too small")
        }else{
            let cascadedEntry = entry;
            cascadedEntry.text = result;
            return cascadedEntry;
        }
    }



    private cascade(entry: TableEntry, dice: Dice) {
        let fullText = entry.text;
        for (let i = 0; i < entry.cascadingRoles.length; i++) {
            let table = entry.cascadingRoles[i];
            fullText += table.role(dice).text + " ";
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
            
            if(lastTableEntry.maxRole >= currentTableEntry.minRole){
                return true; 
            }
        }
        
        return false;
    }
}