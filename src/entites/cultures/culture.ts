import {Entity} from "../entity";
import {randomIntFromInterval} from "../../utils/randomUtils";
import {EmotionTable} from "../../tables/otherTables/emotionTable";
import {QuantifierTable} from "../../tables/otherTables/quantifierTable";
import {HistoricalEventTable} from "../../tables/otherTables/historicalEventTable";
import type {Sign} from "../signs/sign";
import {addNewSignToStore} from "../signs/signStore";
import {MotivationTable} from "../../tables/charTables/motivationTable";

export class Culture extends Entity{
    temperaments = [] as string[];
    events = [] as string[];
    sign: Sign;
    motivation: string;

    constructor() {
        super("Culture");
        let randomTemperamentsNumber = randomIntFromInterval(0,3);
        for(let i = 0; i < randomTemperamentsNumber; i++){
            this.temperaments.push(new QuantifierTable().roleWithCascade().text +" "+new EmotionTable().roleWithCascade().text)
        }

        let randomEventsNumber = randomIntFromInterval(1,3);
        for(let i = 0; i < randomEventsNumber; i++){
            this.events.push(new HistoricalEventTable().roleWithCascade().text)
        }

        this.sign = addNewSignToStore();
        this.motivation = new MotivationTable().roleWithCascade().text;
    }

    toString(){
        let description = `${this.getUniqueName()} with the motivation for its people ${this.motivation}. \n With historical events: \n`;

        this.events.forEach(event => {
            description += `${event} \n`
        })

        description += `With special temperaments: \n`

        this.temperaments.forEach(temperament => {
            description += `${temperament} \n`
        })

        description += `Its sign is: ${this.sign.toString()}`

        return description;
    }
}