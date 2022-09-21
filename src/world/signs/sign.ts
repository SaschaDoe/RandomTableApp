import type {Character} from "../character/character";
import type {Monster} from "../monster/monster";
import type {Artefact} from "../artefacts/artefact";
import {SignTypes} from "./signType";
import {ColourTable} from "../../tables/otherTables/colourTable";
import {createNSC, getNewNSC} from "../character/characterFactory";
import {addMonsterToStore, getNewMonsterInStore} from "../monster/monsterStore";
import {BuildingTable} from "../../tables/locationTables/buildingTable";
import {addArtefactToStore, getNewArtefactInStore} from "../../tables/artefactTables/magicalArtefactTable";
import {TalentTable} from "../../tables/talentTables/talentTable";
import {randomIntFromInterval} from "../../utils/randomUtils";

export class Sign{
    signs: Sign[];
    colour: string;
    characters: Character[];
    monsters: Monster[];
    buildings: string[];
    artefacts: Artefact[];
    talent: string;
    signType: string;

    constructor(signType: string) {
        this.signs = [];
        this.colour = "";
        this.characters = [];
        this.monsters = []
        this.buildings = [];
        this.artefacts = [];
        this.talent = "";
        this.signType = signType;
    }

    setRandomColour(){
        this.colour = new ColourTable().roleWithCascade().text;
    }

    addRandomNewCharacter(){
        this.characters.push(getNewNSC());
    }

    addNewMonster(){
        this.monsters.push(getNewMonsterInStore());
    }

    addNewBuilding(){
        this.buildings.push(new BuildingTable().roleWithCascade().text);
    }

    addNewArtefact(){
        this.artefacts.push(getNewArtefactInStore())
    }

    setRandomTalent(){
        this.talent = new TalentTable().roleWithCascade().text;
    }

    setRandomSignType(){
        let allSignTypes = Object.keys(SignTypes);
        let randomNumber = randomIntFromInterval(0,allSignTypes.length-1)
        this.signType = allSignTypes[randomNumber];
    }


}