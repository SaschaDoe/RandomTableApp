import type {RoomBuilder} from "./roomBuilder";
import type {Monster} from "../monster/monster";
import type {Character} from "../character/character";
import type {Sign} from "../signs/sign";
import {Entity} from "../entity";

export class Room extends Entity{
    treasures: string[];
    furnishing: string[];
    obstacles: string[];
    traps: string[];
    encounters: string[];
    monsters: Monster[];
    characters: Character[];
    artworks: Sign[];

    constructor(roomBuilder: RoomBuilder) {
        super("Room");
        this.treasures = roomBuilder.roomTreasures;
        this.furnishing = roomBuilder.roomFurnishings;
        this.obstacles = roomBuilder.roomObstacles;
        this.traps = roomBuilder.roomTraps;
        this.encounters = roomBuilder.roomEncounters;
        this.monsters = roomBuilder.roomMonsters;
        this.characters = roomBuilder.roomCharacters;
        this.artworks = roomBuilder.roomArtworks;
    }

    toString(){
        let description = this.getUniqueName() + "\n";

        for(let i = 0; i < this.obstacles.length; i++){
            if(i === 0){
                description += "Obstacles: \n"
            }
            description += this.obstacles[i] + "\n";
        }

        for(let i = 0; i < this.furnishing.length; i++){
            if(i === 0){
                description += "Furnishing: \n"
            }
            description += this.furnishing[i] + "\n";
        }
        for(let i = 0; i < this.traps.length; i++){
            if(i === 0){
                description += "Traps: \n"
            }
            description += this.traps[i] + "\n";
        }
        for(let i = 0; i < this.artworks.length; i++){
            if(i === 0){
                description += "Artworks: \n"
            }
            description += this.artworks[i].toString() + "\n";
        }

        for(let i = 0; i < this.characters.length; i++){
            if(i === 0){
                description += "Characters: \n"
            }
            description += this.characters[i].toString() + "\n";
        }

        for(let i = 0; i < this.monsters.length; i++){
            if(i === 0){
                description += "Monsters: \n"
            }
            description += this.monsters[i].toString() + " - "+ this.encounters[i] +"\n";
        }

        return description;
    }

}