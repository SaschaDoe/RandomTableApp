import {AttributeEntity} from "./attributeEntity";
import type {CharacterBuilder} from "./characterBuilder";
import type {Equatable} from "../../utils/equatable";
import {artefactArrayEquals, stringArrayEquals} from "../../utils/equatable";
import type {Artefact} from "../artefacts/artefact";
import type {Relationship} from "./relationship";
import {isMagicalProfession} from "../../tables/charTables/magicUserProfessions";
import type {Continent} from "../continent/continent";
import type {Fraction} from "../fractions/fraction";


export class Character extends AttributeEntity implements Equatable<Character>{
    alignment: string;
    gender: string;
    name: string;
    nobility: string;
    motivation: string;
    profession: string;
    race : string;
    trope: string;

    memberOfFraction: Fraction[];
    readonly advantages: string[];
    readonly disadvantages : string[];
    readonly curses: string[];
    readonly specialFeatures: string[];
    readonly talents: string[];
    readonly magicalTalents: string[];
    readonly artefacts: Artefact[];

    readonly homeContinent: Continent;

    readonly relationships: Relationship[];
    readonly isHigherPower: boolean;


    constructor(
        characterBuilder: CharacterBuilder
    ) {
        if(characterBuilder.charGender === undefined){
            throw Error("Character gender must be set");
        }
        let gender = characterBuilder.charGender;

        if(characterBuilder.charName === undefined){
            throw Error("Character name must be set");
        }
        let name = characterBuilder.charName;

        super(name);

        this.gender = gender;
        this.name = name;

        if(characterBuilder.charAlignment === undefined){
            throw Error("Character alignment must be set");
        }
        this.alignment = characterBuilder.charAlignment;

        if(characterBuilder.charMotivation === undefined){
            throw Error("Character motivation must be set");
        }
        this.motivation = characterBuilder.charMotivation;

        if(characterBuilder.charNobility === undefined){
            throw Error("Character nobility must be set");
        }
        this.nobility = characterBuilder.charNobility;

        if(characterBuilder.charProfession === undefined){
            throw Error("Character profession must be set");
        }
        this.profession = characterBuilder.charProfession;

        if(characterBuilder.charRace === undefined){
            throw Error("Character race must be set");
        }
        this.race = characterBuilder.charRace;

        if(characterBuilder.charContinent === undefined){
            throw Error("Character home continent must be set");
        }
        this.homeContinent = characterBuilder.charContinent;

        if(characterBuilder.charHigherPower === undefined){
            throw Error("Character isHigherPower must be set");
        }
        this.isHigherPower = characterBuilder.charHigherPower;

        if(characterBuilder.charTrope === undefined){
            throw Error("Character trope must be set");
        }
        this.trope = characterBuilder.charTrope;

        this.curses = characterBuilder.charCurses.slice();
        this.specialFeatures = characterBuilder.charSpecialFeatures.slice();
        this.advantages = characterBuilder.charAdvantages.slice();
        this.disadvantages = characterBuilder.charDisadvantages.slice();
        this.talents = characterBuilder.charTalents.slice();
        this.magicalTalents = characterBuilder.charMagicalTalents.slice();
        this.artefacts = characterBuilder.charArtefacts.slice();
        this.memberOfFraction = characterBuilder.charMemberOfFraction.slice();
        this.relationships = [];

        this.ensureMagicalUserHasMagicalTalent();
        this.ensureHigherPowerHasMinThreeMagicalTalent();
    }

    private ensureMagicalUserHasMagicalTalent() {
        if(isMagicalProfession(this.profession) && this.magicalTalents.length < 1){
            throw Error(`Profession ${this.profession} needs at least one magical power`);
        }
    }

    private ensureHigherPowerHasMinThreeMagicalTalent() {
        if(this.isHigherPower && this.magicalTalents.length < 3){
            throw Error(`Profession ${this.profession} needs at least one magical power`);
        }
    }

    isEqualTo(other: Character){
        return (this.alignment === other.alignment &&
            stringArrayEquals(this.advantages, other.advantages) &&
            stringArrayEquals(this.curses, other.curses) &&
            this.gender === other.gender &&
            this.name === other.name &&
            this.nobility === other.nobility &&
            this.motivation === other.motivation &&
            this.profession === other.profession &&
            this.race === other.race &&
            this.homeContinent === other.homeContinent &&
            stringArrayEquals(this.talents, other.talents) &&
            artefactArrayEquals(this.artefacts, other.artefacts) &&
            stringArrayEquals(this.specialFeatures, other.specialFeatures));
    }

    toString(){
        let description = `${this.getUniqueName()} a ${this.alignment} ${this.nobility} ${this.gender} ${this.race}`;

        for(let i = 0; i < this.curses.length; i++){
            description += ` ${this.curses[i]}`
        }

        description += ` ${this.profession}`

        for(let i = 0; i < this.specialFeatures.length; i++){
            if(i === 0){
                description += ` with ${this.specialFeatures[i]}`;
            }else{
                description += ` and ${this.specialFeatures[i]}`;
            }
        }

        description += `. She is from \"${this.homeContinent.getUniqueName()}\" and has the motivation ${this.motivation}`;


        for(let i = 0; i < this.advantages.length; i++){
            if(i === 0){
                if(this.advantages.length === 1){
                    description += `. Her advantage is that she is ${this.advantages[i]}`
                }else{
                    description += `. Her advantages are that she is ${this.advantages[i]}`
                }
            }else{
                description += ` and that she is ${this.advantages[i]}`
            }
        }

        for(let i = 0; i < this.disadvantages.length; i++){
            if(i === 0){
                if(this.disadvantages.length === 1){
                    description += `. Her disadvantage is that she is ${this.disadvantages[i]}`
                }else{
                    description += `. Her disadvantages are that she is ${this.disadvantages[i]}`
                }
            }else{
                description += ` and that she is ${this.disadvantages[i]}`
            }
        }

        for(let i = 0; i < this.talents.length; i++){
            if(i === 0){
                if(this.talents.length === 1){
                    description += `. Her talent is ${this.talents[i]}`
                }else{
                    description += `. Her talents are ${this.talents[i]}`
                }
            }else{
                description += ` and ${this.talents[i]}`
            }
        }

        for(let i = 0; i < this.magicalTalents.length; i++){
            if(i === 0){
                if(this.magicalTalents.length === 1){
                    description += `. Her magical talent is ${this.magicalTalents[i]}`
                }else{
                    description += `. Her magical talents are ${this.magicalTalents[i]}`
                }
            }else{
                description += ` and ${this.magicalTalents[i]}`
            }
        }

        for(let i = 0; i < this.artefacts.length; i++){
            if(i === 0){
                if(this.artefacts.length === 1){
                    description += `. She has the artefact \"${this.artefacts[i].getUniqueName()}\" with her.`
                }else{
                    description += `. She has the artefacts \"${this.artefacts[i].getUniqueName()}\"`
                }
            }else{
                description += ` and \"${this.artefacts[i].getUniqueName()}\"`
                if(i === this.artefacts.length -1){
                    description += ` with her.`
                }
            }
        }

        return description
    }
}

