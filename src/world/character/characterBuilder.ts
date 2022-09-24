import {Character} from "./character";

export class CharacterBuilder{
    //undefined because there is no default value
    charAlignment: string|undefined;
    charGender: string|undefined;
    charName: string|undefined;
    charNobility: string|undefined;
    charMotivation: string|undefined;
    charProfession: string|undefined;
    charRace: string|undefined;

    charCurses: string[];
    charSpecialFeatures: string[];

    constructor() {
        this.charCurses = [];
        this.charSpecialFeatures = [];
    }

    build() {
        return new Character(this);
    }

    withAlignment(alignment: string) {
        this.charAlignment = alignment;
        return this;
    }

    withGender(gender: string) {
        this.charGender = gender;
        return this;
    }

    withName(name: string) {
        this.charName = name;
        return this;
    }

    withNobility(nobility: string) {
        this.charNobility = nobility
        return this;
    }

    withMotivation(motivation: string) {
        this.charMotivation = motivation
        return this;
    }

    withProfession(profession: string) {
        this.charProfession = profession
        return this;
    }

    withRace(race: string) {
        this.charRace = race
        return this;
    }

    withSpecialFeature(specialFeatures: string[]) {
        this.charSpecialFeatures = specialFeatures
        return this;
    }

    withCurses(curses: string[]){
        this.charCurses = this.charCurses.concat(curses);
        return this;
    }
}

