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

    constructor(name: string, id = -1) {
        super(name, id);
        this.setAttributes()
    }

    private setAttributes() {
        let dice = new Dice();
        let diceRole = new DiceRole().withNumberOfDice(3);
        this.courage = dice.role(diceRole);
        this.charisma = dice.role(diceRole);
        this.wisdom = dice.role(diceRole);
        this.intuition = dice.role(diceRole);
        this.dexterity = dice.role(diceRole);
        this.manualDexterity = dice.role(diceRole);
        this.constitution = dice.role(diceRole);
        this.strength = dice.role(diceRole);
    }
}