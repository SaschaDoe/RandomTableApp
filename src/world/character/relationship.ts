import type {Character} from "./character";

export class Relationship{
    firstCharacter : Character
    secondCharacter : Character
    firstToSecondType : string
    secondToFirstType : string

    constructor(first: Character,
                second: Character,
                firstToSecondType: string,
                secondToFirstType: string) {
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