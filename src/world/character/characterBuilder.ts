import {Character} from "./character";

export class CharacterBuilder{
    charName: string|undefined;

    constructor() {
    }

    withName(name: string) {
        this.charName = name;
        return this;
    }

    build() {
        return new Character(this);
    }
}

