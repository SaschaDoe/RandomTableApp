import {Sign} from "./sign";
import type {Character} from "../character/character";
import type {Monster} from "../monster/monster";

export class SignBuilder{
    signName: string | undefined;
    signColours: string[] = [];
    signQuality: string|undefined;
    signType: string | undefined;
    signEvent: string[] = [];
    signLandscape: string|undefined;
    signCharacters: [Character, string][] = [];
    signMonsters: [Monster, string][] = [];
    signBuildings: [string, string][] = [];

    build(){
        return new Sign(this);
    }

    withName(name: string) {
        this.signName = name;
        return this;
    }

    withColours(colours: string[]){
        this.signColours = colours;
        return this;
    }

    withQuality(quality: string) {
        this.signQuality = quality;
        return this;
    }

    withType(type: string){
        this.signType = type;
        return this;
    }

    withEvent(event: string[]){
        this.signEvent = event;
        return this;
    }

    withLandscape(landscape: string) {
        this.signLandscape = landscape;
        return this;
    }

    withCharacters(characters: [Character,string][]){
        this.signCharacters = characters;
        return this;
    }

    withMonsters(monsters: [Monster,string][]){
        this.signMonsters = monsters;
        return this;
    }

    withBuildings(buildings: [string,string][]){
        this.signBuildings = buildings;
        return this;
    }
}