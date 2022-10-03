import {Room} from "./room";
import type {Monster} from "../monster/monster";
import type {Character} from "../character/character";
import type {Sign} from "../signs/sign";

export class RoomBuilder{
    roomTreasures: string[];
    roomFurnishings: string[];
    roomObstacles: string[];
    roomTraps: string[];
    roomEncounters: string[];
    roomMonsters: Monster[];
    roomCharacters: Character[];
    roomArtworks: Sign[];
    transitions: string[];

    constructor() {
        this.roomTreasures = [];
        this.roomFurnishings = [];
        this.roomObstacles = [];
        this.roomTraps = [];
        this.roomEncounters = [];
        this.roomMonsters = [];
        this.roomCharacters = [];
        this.roomArtworks = [];
        this.transitions = [];
    }

    build(){
        return new Room(this);
    }

    withTreasures(treasures: string[]) {
        this.roomTreasures = this.roomTreasures.concat(treasures);
        return this;
    }

    withFurnishing(furnishing: string[]) {
        this.roomFurnishings = this.roomFurnishings.concat(furnishing);
        return this;
    }

    withObstacles(obstacles: string[]){
        this.roomObstacles = this.roomObstacles.concat(obstacles);
        return this;
    }

    withTraps(traps: string[]) {
        this.roomTraps = this.roomTraps.concat(traps);
        return this;
    }

    withEncounters(encounters: string[]) {
        this.roomEncounters = this.roomEncounters.concat(encounters);
        return this;
    }

    withMonsters(monsters: Monster[]) {
        this.roomMonsters = this.roomMonsters.concat(monsters);
        return this;
    }

    withCharacters(characters: Character[]) {
        this.roomCharacters = this.roomCharacters.concat(characters);
        return this;
    }

    withArtworks(artworks: Sign[]){
        this.roomArtworks = this.roomArtworks.concat(artworks);
        return this;
    }

    withTransitions(transitions: string[]){
        this.transitions = transitions;
        return this;
    }
}