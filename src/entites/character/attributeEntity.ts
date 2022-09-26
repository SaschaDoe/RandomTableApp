import {Entity} from "../entity";

export class AttributeEntity extends Entity{
    courage = 0;
    charisma = 0;
    wisdom  = 0;
    intuition  = 0
    dexterity  = 0;
    manualDexterity = 0;
    constitution = 0;
    strength = 0;

    constructor(name: string, id = -1) {
        super(name, id);
    }
}