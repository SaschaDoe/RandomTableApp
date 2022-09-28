import {writable} from "svelte/store";
import {AdventureEventTable} from "../tables/adventureTables/adventureEventTable";
import {AdventurePhases} from "../tables/adventureTables/adventurePhases";
import {probabilityCheck} from "../utils/randomUtils";
import {ConflictTropeTable} from "../tables/adventureTables/conflictTropeTable";
import {AdventureClimaxTable} from "../tables/adventureTables/adventureClimaxTable";
import {NarrationTable} from "../tables/adventureTables/narrationTable";
import {AdventureFinalTable} from "../tables/adventureTables/adventureFinalTable";
import {EndingTropeTable} from "../tables/adventureTables/endingTropeTable";

export let adventurePhase = "Beginning";
export let eventList = writable( [adventurePhase]);
export let currentAdventurePhase = writable(adventurePhase);

export function addEventToStore(){
    eventList.update(events =>{
        events.push(new AdventureEventTable().roleWithCascade().text);
        return events;
    })
}
let adventurePhaseIndex = 0;
export function resetEventList(){
    eventList.set([]);
    currentAdventurePhase.set(AdventurePhases.Beginning);
    adventurePhase = AdventurePhases.Beginning;
    count = 0;
    adventurePhaseIndex = 0;
}

export function setNextAdventurePhase(probability = 100){
    if(probabilityCheck(probability)){
        let adventurePhaseString = Object.keys(AdventurePhases);
        adventurePhaseIndex++;
        adventurePhase = adventurePhaseString[adventurePhaseIndex];
        currentAdventurePhase.update(currentAdventurePhase => {
                currentAdventurePhase = adventurePhaseString[adventurePhaseIndex];
                return currentAdventurePhase;
            }
        )
    }
    return adventurePhase;
}

export let count = 0;
export function getTrope(){

    if(adventurePhase.valueOf()  === AdventurePhases.Beginning){
        if(count > 3){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 0){
            return setNextAdventurePhase()
        }
        count++
        return new ConflictTropeTable().roleWithCascade().text;
    }

    if(adventurePhase.valueOf()  === AdventurePhases.Exposition){
        if(count > 6){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 4){
            return setNextAdventurePhase()
        }
        count++
        return new ConflictTropeTable().roleWithCascade().text;
    }

    if(adventurePhase.valueOf()  === AdventurePhases.Rising){
        if(count > 10){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 7){
            return setNextAdventurePhase()
        }
        count++
        return new ConflictTropeTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Climax){
        if(count > 13){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(40) && count > 12){
            return setNextAdventurePhase();
        }
        count++;
        return new AdventureClimaxTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Retarding){
        if(count > 15){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(60) && count > 14){
            return setNextAdventurePhase()
        }
        count++;
        return new NarrationTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Finale){
        if(count > 18){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 17){
            return setNextAdventurePhase()
        }
        count++;
        return new AdventureFinalTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Resolution){
        if(count > 20){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(10) && count > 19){
            return setNextAdventurePhase()
        }
        count++;
        return new EndingTropeTable().roleWithCascade().text
    }
    return "";
}