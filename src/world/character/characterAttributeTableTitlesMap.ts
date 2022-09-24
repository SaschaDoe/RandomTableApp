import {TableTitles} from "../../tables/tableTitles";
import type {CharacterFactory} from "./characterFactory";

export class CharacterAttributeTableTitlesMap{
    readonly charAttributeTableTitlesMap: Map<TableTitles,((charFactory: CharacterFactory, text: string)=>void)>;

    constructor(charAttributeTableTitlesMap = new Map<TableTitles,((charBuilder: CharacterFactory, text: string)=>void)>()) {
        this.charAttributeTableTitlesMap = charAttributeTableTitlesMap;
        if(this.charAttributeTableTitlesMap.size === 0){
            this.initializeAllTablesMap()
        }
    }

    private initializeAllTablesMap() {
        this.charAttributeTableTitlesMap.set(TableTitles.Gender,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterGender = text);
        this.charAttributeTableTitlesMap.set(TableTitles.GermanMaleName,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterName = text);
        this.charAttributeTableTitlesMap.set(TableTitles.Nobility,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterNobility = text);
        this.charAttributeTableTitlesMap.set(TableTitles.Profession,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterProfession = text);
        this.charAttributeTableTitlesMap.set(TableTitles.Motivation,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterMotivation = text);
        this.charAttributeTableTitlesMap.set(TableTitles.Race,
            (charFactory: CharacterFactory, text: string)=>charFactory.characterRace = text);
    }
}
