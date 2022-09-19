import type {Character} from "../character/character";
import {RelationshipTypeTable} from "../../tables/charTables/relationshipTypeTable";
import {Relationship} from "../character/relationship";
import {Dice} from "../../utils/dice";
import {RelationshipType} from "../character/relationshipType";

export class RelationshipGenerator{
    dice : Dice;

    constructor(dice = new Dice()) {
        this.dice = dice;
    }


    forParty(characters: Character[]) {
        this.connectChars(characters);
        return characters;
    }

    connectChars(characters: Character[]) {
        for (let i = 0; i < characters.length; i++) {
            for (let n = 0; n < characters.length; n++) {
                let outerChar = characters[i];
                let innerChar = characters[n];
                if (outerChar != innerChar) {
                    let found = false;
                    for (let r = 0; r < outerChar.relationships.length; r++) {
                        let relationship = outerChar.relationships[r];
                        if (relationship.getOtherChar(outerChar) === innerChar) {
                            found = true;
                        }
                    }
                    if (found === false) {
                        let relationshipTypeTable = new RelationshipTypeTable();
                        relationshipTypeTable.changeToPartyDistribution();
                        let firstRelationshipType = relationshipTypeTable.role(this.dice).text;
                        let secondRelationshipType = relationshipTypeTable.role(this.dice).text;
                        if(firstRelationshipType === RelationshipType.JustMet || secondRelationshipType === RelationshipType.JustMet){
                            firstRelationshipType = RelationshipType.JustMet;
                            secondRelationshipType = RelationshipType.JustMet;
                        }
                        let relationship = new Relationship(outerChar, innerChar, firstRelationshipType, secondRelationshipType);
                        outerChar.relationships.push(relationship);
                        innerChar.relationships.push(relationship);
                    }
                }

            }
        }
    }


}

