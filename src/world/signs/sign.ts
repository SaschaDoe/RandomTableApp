import type {Character} from "../character/character";
import type {Monster} from "../monster/monster";
import type {Artefact} from "../artefacts/artefact";
import {SignTypes} from "./signType";
import {Entity} from "../entity";


export class Sign extends Entity{
    signs: Sign[];
    colour: string;
    characters: Character[];
    monsters: Monster[];
    buildings: string[];
    artefacts: Artefact[];
    signType: string;
    quality: string;
    event: string;

    constructor(signType = SignTypes.picture) {
        super();
        this.signs = [];
        this.colour = "";
        this.characters = [];
        this.monsters = []
        this.buildings = [];
        this.artefacts = [];
        this.signType = signType;
        this.quality = "";
        this.event = "";
    }

    getDescription(){
        if(this.signs.length === 0
        && this.characters.length === 0
        && this.monsters.length === 0
        && this.buildings.length === 0
        && this.artefacts.length === 0
        && this.event === ""){
            return `a blank ${this.colour} ${this.signType}`;
        }

        let description = `a ${this.quality} ${this.colour} ${this.signType}. `
        for(let i = 0; i < this.characters.length; i++){
            description += this.withoutLastBlankLine(this.characters[i].getDescription());
            if(i < this.characters.length-1){
                description += " and "
            }else{
                description += " "
            }
        }
        if(this.characters.length > 0){
            description += "and "
        }
        for(let i = 0; i < this.monsters.length; i++) {
            description +=  this.withoutLastBlankLine(this.monsters[i].getDescription());
            if (i < this.monsters.length - 1) {
                description += "and "
            } else {
                description += ". "
            }
        }
        if(this.artefacts.length > 0){
            description += `In the forefront lies a `
            for(let i = 0; i < this.artefacts.length; i++){
                description +=  this.withoutLastBlankLine(this.artefacts[i].description);
                if(i < this.artefacts.length-1){
                    description += "and "
                }else{
                    description += ". "
                }
            }
        }
        if(this.buildings.length > 0){
            description += `In the background there is a `
            for(let i = 0; i < this.buildings.length; i++){
                description +=  this.withoutLastBlankLine(this.buildings[i]);
                if(i < this.buildings.length-1){
                    description += "and a "
                }else{
                    description += ". "
                }
            }
        }
        if(this.event !== ""){
            description += `A ${this.event} is going on.`
        }
        return description;
    }

    withoutLastBlankLine(text: string){
        if(text[text.length-1] === " "){
            text = text.slice(0, -1);
        }
        return text;
    }

}