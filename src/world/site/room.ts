export class Room{
    treasures: string[];
    furnishing: string[];
    characters: string[];

    constructor(
        treasures: string[],
        furnishing: string[],
        characters: string[]) {
        this.treasures = treasures;
        this.furnishing = furnishing;
        this.characters = characters;
    }
}