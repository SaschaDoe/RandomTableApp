import {Character} from "./character";
import type {Artefact} from "../artefacts/artefact";
import type {Continent} from "../continent/continent";

export class CharacterBuilder{
    //undefined because there is no default value
    charAlignment: string|undefined;
    charGender: string|undefined;
    charName: string|undefined;
    charNobility: string|undefined;
    charMotivation: string|undefined;
    charProfession: string|undefined;
    charRace: string|undefined;
    charContinent: Continent|undefined;
    charHigherPower: boolean|undefined;

    charCurses: string[];
    charSpecialFeatures: string[];
    charAdvantages: string[];
    charDisadvantages: string[];
    charTalents: string[];
    charArtefacts: Artefact[];
    charMagicalTalents: string[];



    constructor() {
        this.charCurses = [];
        this.charSpecialFeatures = [];
        this.charAdvantages = [];
        this.charDisadvantages = [];
        this.charTalents = [];
        this.charMagicalTalents = [];
        this.charArtefacts = [];
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

    withContinent(continent: Continent){
        this.charContinent = continent;
        return this;
    }

    withAdvantages(advantages: string[]){
        this.charAdvantages = this.charAdvantages.concat(advantages);
        return this;
    }

    withDisadvantages(disadvantages: string[]){
        this.charDisadvantages = this.charDisadvantages.concat(disadvantages);
        return this;
    }

    withSpecialFeature(specialFeatures: string[]) {
        this.charSpecialFeatures = this.charSpecialFeatures.concat(specialFeatures);
        return this;
    }

    withCurses(curses: string[]){
        this.charCurses = this.charCurses.concat(curses);
        return this;
    }

    withTalents(talents: string[]){
        this.charTalents = this.charTalents.concat(talents);
        return this;
    }

    withMagicalTalents(magicalTalents: string[]){
        this.charMagicalTalents = this.charMagicalTalents.concat(magicalTalents);
        return this;
    }

    withArtefacts(artefacts: Artefact[]){
        this.charArtefacts = this.charArtefacts.concat(artefacts);
        return this;
    }

    withIsHigherPower(isHigherPower: boolean){
        this.charHigherPower = isHigherPower;
        return this;
    }
}

