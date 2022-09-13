import type {Character} from "./character";
import type {RelationshipType} from "./relationshipType";

export class Relationship{
    firstCharacter : Character
    secondCharacter : Character
    firstToSecondType : RelationshipType
    secondToFirstType : RelationshipType

    constructor(first: Character,
                second: Character,
                firstToSecondType: RelationshipType,
                secondToFirstType: RelationshipType) {
        this.firstCharacter = first;
        this.secondCharacter = second;
        this.firstToSecondType = firstToSecondType;
        this.secondToFirstType = secondToFirstType;
    }

    getOtherChar(char: Character){
        if(this.firstCharacter === char){
            return this.secondCharacter;
        }

        return this.firstCharacter;
    }

    getRelationshipTypeToOtherChar(char: Character){
        if(this.firstCharacter !== char){
            return this.secondToFirstType;
        }

        return this.firstToSecondType;
    }
}