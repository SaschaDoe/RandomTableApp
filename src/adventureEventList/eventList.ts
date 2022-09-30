import {writable} from "svelte/store";
import {AdventureEventTable} from "../tables/adventureTables/adventureEventTable";
import {AdventurePhases} from "../tables/adventureTables/adventurePhases";
import {probabilityCheck} from "../utils/randomUtils";
import {AdventureClimaxTable} from "../tables/adventureTables/adventureClimaxTable";
import {NarrationTable} from "../tables/adventureTables/narrationTable";
import {AdventureFinalTable} from "../tables/adventureTables/adventureFinalTable";
import {EndingTropeTable} from "../tables/adventureTables/endingTropeTable";
import {BeginningTropeTable} from "../tables/adventureTables/beginningTropeTable";
import {
    addDungeonWithRoomsReturnDescription
} from "../entites/dungeons/dungeonStore";
import {addNewNSCToCharacterStoreReturnDescription} from "../entites/character/charStore";
import {addNewFractionToStoreReturnDescription} from "../entites/fractions/fractionStore";
import {addNewContinentToStore} from "../entites/continent/continentStore";
import {AdventureRisingTable} from "../tables/adventureTables/adventureRisingTable";
import {SeasonTable} from "../tables/otherTables/seasonTable";
import {WeatherTable} from "../tables/otherTables/weatherTable";
import {PlanTable} from "../tables/adventureTables/planTable";
import {addNewTownToStoreReturnDescription} from "../entites/towns/townStore";
import {VillainAdjectiveTable} from "../tables/adventureTables/villainAdjectiveTable";
import {addNewNationReturnDescription} from "../entites/nations/nationStore";

export let adventurePhase = "Beginning";
export let eventList = writable( [adventurePhase]);
export let currentAdventurePhase = writable(adventurePhase);

export function addEventToStore(){
    eventList.update(events =>{
        events.push("season "+new SeasonTable().roleWithCascade().text + " with weather " + new WeatherTable().roleWithCascade().text)
        events.push(addNewNationReturnDescription().toString());
        events.push(addNewNationReturnDescription().toString());
        events.push("town: "+addNewTownToStoreReturnDescription())
        events.push("possible plan: "+new PlanTable().roleWithCascade().text)
        events.push("villain is: "+new VillainAdjectiveTable().roleWithCascade().text)
        if(probabilityCheck(50)){
            events.push("and "+new VillainAdjectiveTable().roleWithCascade().text)
        }
        events.push("possible villain: "+addNewNSCToCharacterStoreReturnDescription())
        events.push("possible relationship char: "+addNewNSCToCharacterStoreReturnDescription())


        while(adventurePhase !== AdventurePhases.End){
            events.push(new AdventureEventTable().roleWithCascade().text);
        }

        return events;
    })
}
let adventurePhaseIndex = 0;
export function resetEventList(){
    eventList.set([AdventurePhases.Beginning]);
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
    return "-----"+adventurePhase+"-----";
}

export let count = 0;
export function getTrope(){

    if(adventurePhase.valueOf()  === AdventurePhases.Beginning){
        if(count === 0){
            count++;
            return addNewContinentToStore();
        }
        if(count > 4){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 1){
            return setNextAdventurePhase()
        }
        count++
        return new BeginningTropeTable().roleWithCascade().text;
    }

    if(adventurePhase.valueOf()  === AdventurePhases.Exposition){
        if(count === 5){
            count++;
            return "introducing character: "+addNewNSCToCharacterStoreReturnDescription();
        }
        if(count === 6){
            count++;
            return "introducing fraction: "+addNewFractionToStoreReturnDescription();
        }
        if(count === 7){
            count++
            return "introducing dungeon: " + addDungeonWithRoomsReturnDescription();
        }
        if(count > 10){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 8){
            return setNextAdventurePhase()
        }
        count++
        return new BeginningTropeTable().roleWithCascade().text;
    }

    if(adventurePhase.valueOf()  === AdventurePhases.Rising){
        if(count > 13){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 11){
            return setNextAdventurePhase()
        }
        count++
        return new AdventureRisingTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Climax){
        if(count > 16){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(40) && count > 15){
            return setNextAdventurePhase();
        }
        count++;
        return new AdventureClimaxTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Retarding){
        if(count > 18){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(60) && count > 17){
            return setNextAdventurePhase()
        }
        count++;
        return new NarrationTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Finale){
        if(count > 21){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(30) && count > 20){
            return setNextAdventurePhase()
        }
        count++;
        return new AdventureFinalTable().roleWithCascade().text;
    }
    if(adventurePhase.valueOf()  === AdventurePhases.Resolution){
        if(count > 23){
            return setNextAdventurePhase();
        }
        if(probabilityCheck(10) && count > 22){
            return setNextAdventurePhase()
        }
        count++;
        return new EndingTropeTable().roleWithCascade().text
    }
    return "";
}