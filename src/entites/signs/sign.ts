import {Entity} from "../entity";
import type {SignBuilder} from "./signBuilder";
import type {Character} from "../character/character";
import type {Monster} from "../monster/monster";


export class Sign extends Entity{
    colours: string[];
    quality: string;
    type: string;
    event: string[];
    landscape: string;
    characters: [Character,string][]
    monsters: [Monster,string][]
    buildings: [string,string][];


    constructor(signBuilder: SignBuilder) {
        if(signBuilder.signName === undefined){
            throw Error("Sign name must be set.")
        }
        let name = signBuilder.signName;
        super(name);

        if(signBuilder.signQuality === undefined){
            throw Error("Sign quality must be set.")
        }
        this.quality = signBuilder.signQuality;

        if(signBuilder.signType === undefined){
            throw Error("Sign type must be set.")
        }
        this.type = signBuilder.signType;

        if(signBuilder.signLandscape === undefined){
            throw Error("Sign landscape must be set.")
        }
        this.landscape = signBuilder.signLandscape;
        this.event = signBuilder.signEvent;
        this.colours = signBuilder.signColours;
        this.characters = signBuilder.signCharacters;
        this.monsters = signBuilder.signMonsters;
        this.buildings = signBuilder.signBuildings;
    }

    isBlank(){
        return this.characters.length === 0
            && this.monsters.length === 0
            && this.buildings.length === 0
            && this.event.length === 0;

    }

    toString(){
        let description = `a ${this.quality} `
        for(let i = 0; i < this.colours.length; i++){
            description += `${this.colours[i]} `
        }
        description += `${this.type}.`
        if(this.isBlank()){
            description = `a blank ${this.quality} `
            for(let i = 0; i < this.colours.length; i++){
                description += `${this.colours[i]} `
            }
            description += `${this.type}. `
            for(let i = 0; i < this.colours.length; i++){
                description += `${this.colours[i]} `
            }
            description += `${this.type}.`
            return description;
        }

        for(let i = 0; i < this.characters.length; i++){
            if(i === 0){
                description += ` On `
            }
            if(i > 0){
                description += ` and on`
            }
            description += ` ${this.characters[i][1]} is ${this.characters[i][0].race} ${this.characters[i][0].profession} ${this.characters[i][0].getUniqueName()}`;
            if(i === this.characters.length-1){
                description += "."
            }
        }

        for(let i = 0; i < this.monsters.length; i++){
            if(i === 0){
                description += ` On`
            }
            if(i > 0){
                description += ` and on`
            }
            description += ` ${this.monsters[i][1]} is ${this.monsters[i][0].description} ${this.monsters[i][0].getUniqueName()}`
            if(i === this.monsters.length-1){
                description += "."
            }
        }



        for(let i = 0; i < this.buildings.length; i++){
            if(i === 0){
                description += ` On `
            }
            if(i > 0){
                description += ` and on`
            }
            description += `${this.buildings[i][1]} is ${this.buildings[i][0]}`
            if(i === this.buildings.length-1){
                description += "."
            }
        }



        if(this.event.length > 0){
            description += ` A ${this.event[0]} is going on.`
        }
        return description;
    }
}