import {writable} from "svelte/store";
import type {Dungeon} from "./dungeon";
import {DungeonFactory} from "./dungeonFactory";
import {addNSCToCharacterStore} from "../character/charStore";

export let dungeonStore = writable([] as Dungeon[]);

export function addDungeonToStore(dungeonFactory = new DungeonFactory()){
    let dungeon = dungeonFactory.create();
    dungeonStore.update(dungeons =>  {
        dungeons.push(dungeon);
        return dungeons;
    })
    let characters = dungeon.rooms.map(room => room.characters).flat();
    characters.forEach(char => {
        addNSCToCharacterStore(char);
    })

    return dungeon;
}