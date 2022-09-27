import {TableRoller} from "../../tables/tableRoler";
import {CharacterBuilder} from "./characterBuilder";
import {Random} from "../../utils/randomUtils";
import {TableTitles} from "../../tables/tableTitles";
import {isMagicalProfession} from "../../tables/charTables/magicUserProfessions";
import type {Character} from "./character";
import type {Continent} from "../continent/continent";
import {Factory} from "../factory";
import {RelationshipTypeTable} from "../../tables/charTables/relationshipTypeTable";
import {RelationshipType} from "./relationshipType";
import {Relationship} from "./relationship";
import type {Fraction} from "../fractions/fraction";
import {addNewFractionToStore} from "../fractions/fractionStore";
import {chooseAContinentFromStore} from "../continent/continentStore";

export let advantagesMinInterval = -10;
export let advantagesMaxInterval = 3;
export let disadvantagesMinInterval = -10;
export let disadvantagesMaxInterval = 3;
export let curseMinInterval = -50;
export let curseMaxInterval = 2;
export let specialFeaturesMinInterval = -10;
export let specialFeaturesMaxInterval = 2;
export let talentsMinInterval = -10;
export let talentsMaxInterval = 3;
export let magicalTalentsMinInterval = -50;
export let magicalTalentUserMinInterval = 1
export let magicalTalentHigherPowerMinInterval = 3
export let magicalTalentHigherPowerMaxInterval = 7
export let magicalTalentMaxInterval = 3;
export let fractionMinInterval = -1;
export let fractionMaxInterval = 0;
export let oldContinentProbability = 80;

export class CharacterFactory extends Factory{
    characterAlignment = "";
    characterName = "";
    characterGender = "";
    characterNobility = "";
    characterMotivation = "";
    characterRace = "";
    characterProfession = "";

    characterAdvantages = [] as string[];
    characterCurses = [] as string[];
    charSpecialFeatures = [] as string[];
    characterDisadvantages = [] as string[];
    charTalents = [] as string[];
    charMagicalTalents = [] as string[];
    characterContinent: Continent|undefined;
    characterIsHigherPower = false;
    characterFractions: Fraction[] = [];

    constructor(
        tableRoller = new TableRoller(),
        random = new Random()
    ) {
        super(tableRoller,random);
        this.tableRoller = tableRoller
        this.random = random



        this.setAllMandatory();
        this.setAllNonMandatory()
    }

    clone(char: Character){
        this.characterAlignment = char.alignment;
        this.characterName = char.name;
        this.characterGender = char.gender;
        this.characterNobility = char.nobility
        this.characterMotivation = char.motivation;
        this.characterRace = char.race;
        this.characterProfession = char.profession;

        this.characterAdvantages = char.advantages.slice();
        this.characterCurses = char.curses.slice();
        this.charSpecialFeatures = char.specialFeatures.slice();
        this.characterDisadvantages = char.disadvantages.slice();
        this.charTalents = char.talents.slice();
        this.charMagicalTalents = char.magicalTalents.slice();
        this.characterContinent = char.homeContinent;
        this.characterIsHigherPower = char.isHigherPower;
        return this;
    }

    create() {
        let characterBuilder = new CharacterBuilder()

        this.ensureMagicalUserHasAtLeastOneMagicalTalent();
        this.ensureHigherPowerHasAtLeastThreeMagicalTalent();
        this.characterContinent = chooseAContinentFromStore(oldContinentProbability);

        let char = characterBuilder
            .withAlignment(this.characterAlignment)
            .withName(this.characterName)
            .withGender(this.characterGender)
            .withNobility(this.characterNobility)
            .withMotivation(this.characterMotivation)
            .withProfession(this.characterProfession)
            .withRace(this.characterRace)
            .withAdvantages(this.characterAdvantages)
            .withDisadvantages(this.characterDisadvantages)
            .withCurses(this.characterCurses)
            .withSpecialFeature((this.charSpecialFeatures))
            .withTalents((this.charTalents))
            .withMagicalTalents((this.charMagicalTalents))
            .withContinent(this.characterContinent)
            .withIsHigherPower(this.characterIsHigherPower)
            .withFraction(this.characterFractions)
            .build()

        this.characterFractions.forEach(fraction => {
            fraction.members.push(char);
        })
        return char;
    }



    private ensureMagicalUserHasAtLeastOneMagicalTalent() {
        if (isMagicalProfession(this.characterProfession) && this.charMagicalTalents.length < 1) {
            this.setNonMandatory(magicalTalentUserMinInterval, magicalTalentMaxInterval, this.charMagicalTalents, TableTitles.MagicalTalent);
        }
    }

    private ensureHigherPowerHasAtLeastThreeMagicalTalent() {
        if (this.characterIsHigherPower && this.charMagicalTalents.length < 3) {
            this.setNonMandatory(magicalTalentHigherPowerMinInterval, magicalTalentHigherPowerMaxInterval, this.charMagicalTalents, TableTitles.MagicalTalent);
        }
    }

    private setAllMandatory() {
        this.characterGender = this.tableRoller.roleFor(TableTitles.Gender).text;
        if(this.characterGender === "female"){
            this.characterName = this.tableRoller.roleFor(TableTitles.GermanFemaleNames).text;
        }else{
            this.characterName = this.tableRoller.roleFor(TableTitles.GermanMaleName).text;
        }
        this.characterAlignment = this.tableRoller.roleFor(TableTitles.Alignment).text;
        this.characterRace = this.tableRoller.roleFor(TableTitles.Race).text;
        this.characterMotivation = this.tableRoller.roleFor(TableTitles.Motivation).text;
        this.characterProfession = this.tableRoller.roleFor(TableTitles.Profession).text;
        this.characterNobility = this.tableRoller.roleFor(TableTitles.Nobility).text;
    }

    private setAllNonMandatory() {
        this.setNonMandatory(advantagesMinInterval, advantagesMaxInterval,this.characterAdvantages,TableTitles.Advantages)
        this.setNonMandatory(disadvantagesMinInterval, disadvantagesMaxInterval,this.characterDisadvantages,TableTitles.Disadvantages)
        this.setNonMandatory(curseMinInterval, curseMaxInterval,this.characterCurses,TableTitles.Curse)
        this.setNonMandatory(specialFeaturesMinInterval, specialFeaturesMaxInterval,this.charSpecialFeatures,TableTitles.SpecialFeatures)
        this.setNonMandatory(talentsMinInterval, talentsMaxInterval,this.charTalents,TableTitles.ProfaneTalent)
        this.setNonMandatory(magicalTalentsMinInterval, magicalTalentMaxInterval,this.charMagicalTalents,TableTitles.MagicalTalent)

        let numberOfAdvantages = this.random.intFromInterval(fractionMinInterval,fractionMaxInterval);
        if(numberOfAdvantages <= 0){
            numberOfAdvantages = 0;
        }
        for(let i = 0; i < numberOfAdvantages; i++){
            this.characterFractions.push(addNewFractionToStore());
        }
    }

    addAdvantage(){
        this.characterAdvantages.push(this.tableRoller.roleFor(TableTitles.Advantages).text)
        return this;
    }

    addDisadvantage(){
        this.characterDisadvantages.push(this.tableRoller.roleFor(TableTitles.Disadvantages).text)
        return this;
    }

    addCurse(){
        this.characterCurses.push(this.tableRoller.roleFor(TableTitles.Curse).text)
        return this;
    }

    addSpecialFeature(){
        this.charSpecialFeatures.push(this.tableRoller.roleFor(TableTitles.SpecialFeatures).text)
        return this;
    }

    addTalent(){
        this.charTalents.push(this.tableRoller.roleFor(TableTitles.Talent).text)
        return this;
    }

    withName(name: string){
        this.characterName = name;
        return this
    }

    addMagicalTalent(){
        this.charMagicalTalents.push(this.tableRoller.roleFor(TableTitles.MagicalTalent).text)
        return this;
    }

    withNobility(nobility: string) {
        this.characterNobility = nobility;
        return this;
    }

    createParty(numberOfPartyMembers: number) {
        let party = [];
        for(let i = 0; i < numberOfPartyMembers; i++){
            let character = this.create();
            party.push(character)
        }

        this.connectChars(party);
        return party;
    }

    connectChars(characters: Character[]) {
        for (let i = 0; i < characters.length; i++) {
            for (let n = 0; n < characters.length; n++) {
                let outerChar = characters[i];
                let innerChar = characters[n];
                if (outerChar != innerChar) {
                    let found = false;
                    for (let r = 0; r < outerChar.relationships.length; r++) {
                        let relationship = outerChar.relationships[r];
                        if (relationship.getOtherChar(outerChar) === innerChar) {
                            found = true;
                        }
                    }
                    if (found === false) {
                        let relationshipTypeTable = new RelationshipTypeTable();
                        relationshipTypeTable.changeToPartyDistribution();
                        let firstRelationshipType = relationshipTypeTable.role().text;
                        let secondRelationshipType = relationshipTypeTable.role().text;
                        if (firstRelationshipType === RelationshipType.JustMet || secondRelationshipType === RelationshipType.JustMet) {
                            firstRelationshipType = RelationshipType.JustMet;
                            secondRelationshipType = RelationshipType.JustMet;
                        }
                        let relationship = new Relationship(outerChar, innerChar, firstRelationshipType, secondRelationshipType);
                        outerChar.relationships.push(relationship);
                        innerChar.relationships.push(relationship);
                    }
                }

            }
        }
    }

    createHigherPower() {
        let charFactory = new CharacterFactory();
        charFactory.characterIsHigherPower = true;
        return charFactory.create();

    }
}


