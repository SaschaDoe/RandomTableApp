import {indexesStore, titleStore} from "../components/indexListStore";
import type {Character} from "../world/character/character";
import {characters, higherPowerBeingsStore} from "../world/character/charStore";
import type {Site} from "../world/site/site";
import {continentStore, sphereStore} from "../world/site/siteStore";
import type {Dungeon} from "../world/site/dungeon";
import {dungeonStore} from "../world/site/dungeonStore";

export const updateIndex = () =>{
    let titles = [];
    titles.push("Characters")
    titles.push("Higher Beings")
    titles.push("Continents")
    titles.push("Spheres")
    titles.push("Dungeons")
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

    let continents = [] as Site[];
    continentStore.subscribe((cs) => {
        continents = cs;
    })
    let continentIndexes = [] as string[];
    for(let i = 0; i < continents.length; i++){
        let continent = continents[i];
        continentIndexes.push(continent.getUniqueName());
    }

    let spheres = [] as Site[];
    sphereStore.subscribe((cs) => {
        spheres = cs;
    })
    let spheresIndexes = [] as string[];
    for(let i = 0; i < spheres.length; i++){
        let continent = spheres[i];
        spheresIndexes.push(continent.getUniqueName());
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
    indexesStore.set([charIndexes,godsIndexes, continentIndexes, spheresIndexes, dungeonIndexes]);
}