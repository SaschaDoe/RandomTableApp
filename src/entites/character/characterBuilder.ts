import {Character} from "./character";
import type {Artefact} from "../artefacts/artefact";
import type {Continent} from "../continent/continent";
import type {Fraction} from "../fractions/fraction";
import type {Relationship} from "./relationship";

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
    charMemberOfFraction: Fraction[];
    charTrope: string | undefined;

    courage = 0;
    charisma = 0;
    wisdom  = 0;
    intuition  = 0
    dexterity  = 0;
    manualDexterity = 0;
    constitution = 0;
    strength = 0;
    relationships: Relationship[] = [];
    id = 0;
    charNickname = ""

    constructor() {
        this.charCurses = [];
        this.charSpecialFeatures = [];
        this.charAdvantages = [];
        this.charDisadvantages = [];
        this.charTalents = [];
        this.charMagicalTalents = [];
        this.charArtefacts = [];
        this.charMemberOfFraction = [];
    }

    build() {
        let character = new Character(this);
        character.courage = this.courage;
        character.charisma = this.charisma;
        character.wisdom = this.wisdom;
        character.intuition = this.intuition;
        character.dexterity = this.dexterity;
        character.manualDexterity = this.manualDexterity;
        character.constitution = this.constitution;
        character.strength = this.strength;
        return character;
    }

    withCourage(courage: number){
        this.courage = courage;
        return this;
    }

    withCharisma(charisma: number){
        this.charisma = charisma;
        return this;
    }

    withWisdom(wisdom: number){
        this.wisdom = wisdom;
        return this;
    }

    withIntuition(intuition: number){
        this.intuition = intuition;
        return this;
    }

    withDexterity(dexterity: number){
        this.dexterity = dexterity;
        return this;
    }

    withManualDexterity(manualDexterity: number){
        this.manualDexterity = manualDexterity;
        return this;
    }

    withConstitution(constitution: number){
        this.constitution = constitution;
        return this;
    }

    withStrength(strength: number){
        this.strength = strength;
        return this;
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

    withFraction(fractions: Fraction[]){
        this.charMemberOfFraction = this.charMemberOfFraction.concat(fractions);

        return this;
    }

    withTrope(trope: string){
        this.charTrope = trope;
        return this;
    }

    withRelationships(relationships: Relationship[]) {
        this.relationships = relationships;
        return this;
    }

    withId(id: number) {
        this.id = id;
        return this;
    }

    withNickname(nickname: string){
        this.charNickname = nickname;
        return this;
    }
}

