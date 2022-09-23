import {Entity} from "../entity";
import {Dice} from "../../utils/dice";
import {DiceRole} from "../../tables/diceRole";

export class AttributeEntity extends Entity{
    courage = 0;
    charisma = 0;
    wisdom  = 0;
    intuition  = 0
    dexterity  = 0;
    manualDexterity = 0;
    constitution = 0;
    strength = 0;

    constructor() {
        super();
    }
}