import {Sign} from "./sign";
import {SignTypes} from "./signType";
import {ColourTable} from "../../tables/otherTables/colourTable";
import {getNewNSC} from "../character/characterFactory";
import {getNewMonsterInStore} from "../monster/monsterStore";
import {BuildingTable} from "../../tables/locationTables/buildingTable";
import {getNewArtefactInStore} from "../../tables/artefactTables/magicalArtefactTable";
import {QualityTable} from "../../tables/otherTables/qualityTable";
import {HistoricalEventTable} from "../../tables/otherTables/historicalEventTable";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {otherStore} from "../otherStore";


export class SignFactory{
    sign: Sign;
    constructor(sign = new Sign()) {
        this.sign = sign;
    }

    addSignToStore(){
        otherStore.update(others => {
            others.push(this.createRandomizedSign());
            return others;
        })
    }

    createRandomizedSign(){
        this.setRandomSignType();
        this.setRandomQuality();
        
        let hasEvent = randomIntFromInterval(-1,1)
        if(hasEvent === 1){
            this.setRandomEvent();
        }
        let hasColor = randomIntFromInterval(-1,1);
        if(hasColor === 0){
            this.setRandomColour()
        }
        let numberOfCharacters = randomIntFromInterval(-2,2);
        for(let i = 0; i < numberOfCharacters; i++){
            this.addNewCharacter();
        }
        let numberOfMonsters = randomIntFromInterval(-2,2);
        for(let i = 0; i < numberOfMonsters; i++){
            this.addNewMonster();
        }
        let numberOfArtefacts = randomIntFromInterval(-2,2);
        for(let i = 0; i < numberOfArtefacts; i++){
            this.addNewArtefact();
        }
        let numberOfBuildings = randomIntFromInterval(-2,2);
        for(let i = 0; i < numberOfBuildings; i++){
            this.addNewBuilding();
        }
        this.sign.setDescription();
        return this.sign;
    }

    setRandomColour(){
        this.sign.colour = new ColourTable().roleWithCascade().text;
    }

    addNewCharacter(){
        this.sign.characters.push(getNewNSC());
    }

    addNewMonster(){
        this.sign.monsters.push(getNewMonsterInStore());
    }

    addNewBuilding(){
        this.sign.buildings.push(new BuildingTable().roleWithCascade().text);
    }

    addNewArtefact(){
        this.sign.artefacts.push(getNewArtefactInStore())
    }

    setRandomSignType(){
        let allSignTypes = Object.keys(SignTypes);
        let randomNumber = randomIntFromInterval(0,allSignTypes.length-1);
        this.sign.signType = allSignTypes[randomNumber];
    }

    setRandomQuality(){
        this.sign.quality = new QualityTable().roleWithCascade().text;
    }

    setRandomEvent(){
        this.sign.event = new HistoricalEventTable().roleWithCascade().text;
    }

}

