export class Room{
    treasures: string[];
    furnishing: string[];
    characters: string[];
    obstacles: string[];
    traps: string[];

    constructor(
        treasures: string[],
        furnishing: string[],
        characters: string[],
        obstacles: string[],
        traps: string[]) {
        this.treasures = treasures;
        this.furnishing = furnishing;
        this.characters = characters;
        this.obstacles = obstacles;
        this.traps = traps;
    }
}