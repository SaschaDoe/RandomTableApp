import {Races} from "../tables/charTables/races";
import {Dice} from "../utils/dice";
import {DiceRole} from "../tables/diceRole";

export class Character{
    name : string;
    race : string;

    courage = 0;
    charisma = 0;
    wisdom  = 0;
    intuition  = 0
    dexterity  = 0;
    manualDexterity = 0;
    constitution = 0;
    strength = 0;

    constructor(race = Races.Human, name = "no name", dice = new Dice()) {
        this.name = name;
        this.race = race;
        this.roleForAttributes(dice);
    }

    private roleForAttributes(dice: Dice) {
        let attributeDiceRole = new DiceRole().withMultiplier(3);

        this.courage = dice.role(attributeDiceRole);
        this.charisma = dice.role(attributeDiceRole);
        this.wisdom = dice.role(attributeDiceRole);
        this.intuition = dice.role(attributeDiceRole);
        this.dexterity = dice.role(attributeDiceRole);
        this.manualDexterity = dice.role(attributeDiceRole);
        this.constitution = dice.role(attributeDiceRole);
        this.strength = dice.role(attributeDiceRole);
    }
}