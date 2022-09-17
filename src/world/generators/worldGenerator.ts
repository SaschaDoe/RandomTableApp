import {Dice} from "../../utils/dice";
import {applyNotMandatoryTables, characters} from "../stores/charStore";
import {Character} from "../character";
import {RelationshipGenerator} from "./relationshipGenerator";

export class WorldGenerator{
    generateWorld(numberOfInitialParty: number, dice = new Dice()) {
        if(numberOfInitialParty < 1){
            throw Error("Number of initial party must be greater than 0");
        }

        characters.update((chars) => {
            for(let i = 0; i < numberOfInitialParty; i++){
                let newChar = new Character(dice);
                applyNotMandatoryTables(newChar);
                chars.push(newChar)
            }
            let relationshipGenerator = new RelationshipGenerator();
            relationshipGenerator.forParty(chars);
            return chars;
        })
    }
}