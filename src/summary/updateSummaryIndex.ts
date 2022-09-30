import {indexesStore, titleStore} from "../components/indexListStore";
import type {Character} from "../entites/character/character";
import {characters, higherPowerBeingsStore} from "../entites/character/charStore";
import type {Artefact} from "../entites/artefacts/artefact";
import {artefactStore} from "../entites/artefacts/artefactStore";
import {monsterStore} from "../entites/monster/monsterStore";
import type {Monster} from "../entites/monster/monster";
import type {Entity} from "../entites/entity";
import type {Dungeon} from "../entites/dungeons/dungeon";
import type {Continent} from "../entites/continent/continent";
import {continentStore} from "../entites/continent/continentStore";
import {dungeonStore} from "../entites/dungeons/dungeonStore";
import {signStore} from "../entites/signs/signStore";
import {fractionStore} from "../entites/fractions/fractionStore";
import type {Fraction} from "../entites/fractions/fraction";
import type {Town} from "../entites/towns/town";
import {townStore} from "../entites/towns/townStore";
import type {Nation} from "../entites/nations/nation";
import {nationStore} from "../entites/nations/nationStore";

export const updateIndex = () =>{
    let titles = [];
    titles.push("Characters")
    titles.push("Higher Beings")
    titles.push("Fractions")
    titles.push("Monsters")
    titles.push("Continents")
    titles.push("Nations")
    titles.push("Towns")
    titles.push("Dungeons")
    titles.push("Artefacts")
    titles.push("Signs")

    titleStore.set(titles);
    let chars = [] as Character[];
    characters.subscribe((cs) => {
        chars = cs;
    })
    let charIndexes = [] as string[];
    for(let i = 0; i < chars.length; i++){
        let char = chars[i];
        charIndexes.push(char.getUniqueName());
    }

    let higherPowerBeings = [] as Character[];
    higherPowerBeingsStore.subscribe((cs) => {
        higherPowerBeings = cs;
    })
    let godsIndexes = [] as string[];
    for(let i = 0; i < higherPowerBeings.length; i++){
        let char = higherPowerBeings[i];
        godsIndexes.push(char.getUniqueName());
    }

    let fractions = [] as Fraction[];
    fractionStore.subscribe((cs) => {
        fractions = cs;
    })
    let fractionIndexes = [] as string[];
    for(let i = 0; i < fractions.length; i++){
        let fraction = fractions[i];
        fractionIndexes.push(fraction.getUniqueName());
    }

    let monsters = [] as Monster[];
    monsterStore.subscribe((cs) => {
        monsters = cs;
    })
    let monsterIndexes = [] as string[];
    for(let i = 0; i < monsters.length; i++){
        let monster = monsters[i];
        monsterIndexes.push(monster.getUniqueName());
    }

    let continents = [] as Continent[];
    continentStore.subscribe((cs) => {
        continents = cs;
    })
    let continentIndexes = [] as string[];
    for(let i = 0; i < continents.length; i++){
        let continent = continents[i];
        continentIndexes.push(continent.getUniqueName());
    }

    let nations = [] as Nation[];
    nationStore.subscribe((cs) => {
        nations = cs;
    })
    let nationIndexes = [] as string[];
    for(let i = 0; i < nations.length; i++){
        let nation = nations[i];
        nationIndexes.push(nation.getUniqueName());
    }


    let towns = [] as Town[];
    townStore.subscribe((cs) => {
        towns = cs;
    })
    let townIndexes = [] as string[];
    for(let i = 0; i < towns.length; i++){
        let town = towns[i];
        townIndexes.push(town.getUniqueName());
    }

    let dungeons = [] as Dungeon[];
    dungeonStore.subscribe((cs) => {
        dungeons = cs;
    })
    let dungeonIndexes = [] as string[];
    for(let i = 0; i < dungeons.length; i++){
        let dungeon = dungeons[i];
        dungeonIndexes.push(dungeon.getUniqueName());
    }

    let artefacts = [] as Artefact[];
    artefactStore.subscribe((cs) => {
        artefacts = cs;
    })
    let artefactIndexes = [] as string[];
    for(let i = 0; i < artefacts.length; i++){
        let artefact = artefacts[i];
        artefactIndexes.push(artefact.getUniqueName());
    }

    let signs = [] as Entity[];
    signStore.subscribe((cs) => {
        signs = cs;
    })
    let signIndexes = [] as string[];
    for(let i = 0; i < signs.length; i++){
        let sign = signs[i];
        signIndexes.push(sign.getUniqueName());
    }
    indexesStore.set([charIndexes,
        godsIndexes,
        fractionIndexes,
        monsterIndexes,
        continentIndexes,
        nationIndexes,
        townIndexes,
        dungeonIndexes,
        artefactIndexes,
        signIndexes]);
}