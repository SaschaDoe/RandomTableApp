
import { DiceRole } from "./diceRole";
import { isBetween } from "../utils/listUtils";
import { Dice } from "../utils/dice";
import {TableTitles} from "./tableTitles";
import {TableEntry} from "./tableEntry";

export class Table {
    title: TableTitles;
    diceRole: DiceRole;
    entries: TableEntry[];
    functions: ((entity: any, content: any) => any)[] = [];

    constructor( entries : TableEntry[] = [new TableEntry().withRoleInterval(1,6)],
                 title = TableTitles.Default,
                 diceRole = new DiceRole())
    {
        this.diceRole = diceRole;

        if (this.isEntriesOverlapping(entries)){
            throw RangeError('Entries should not contain overlapping roles and should be descendent');
        }

        this.title = title;
        this.entries = entries;
    }

    role(dice = new Dice()){
        let randomNumber = dice.role(this.diceRole);
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
        let fullText = entry.text;
        for(let i=0; i < entry.cascadingRoles.length; i++){
            let table = entry.cascadingRoles[i];
            fullText += table.role(dice).text+" ";
        }
        let result = fullText;
        if(entry.cascadingRoles.length != 0){
            result = fullText.slice(0, -1);
        }
        if(result === undefined){
            throw Error("Entry too small")
        }else{
            return result;
        }
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