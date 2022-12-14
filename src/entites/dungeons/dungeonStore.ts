import {writable} from "svelte/store";
import type {Dungeon} from "./dungeon";
import {DungeonFactory} from "./dungeonFactory";
import {addNSCToCharacterStore} from "../character/charStore";
import {RoomFactory} from "../rooms/roomFactory";
import {addMonsterInStore} from "../monster/monsterStore";
import {updateIndex} from "../../summary/updateSummaryIndex";
import {randomIntFromInterval} from "../../utils/randomUtils";

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
    updateIndex();
    return dungeon;
}

export function addDungeonToStoreReturnUniqueName(){
    let dungeon = addDungeonToStore();
    return dungeon.getUniqueName();
}

export function addNewRoomTo(dungeon: Dungeon){
    let room = new RoomFactory().create();
    dungeon.rooms.push(room);
    room.monsters.forEach(monster => addMonsterInStore(monster));
    return room;
}

export function addRoomsTo(dungeon: Dungeon, maxRooms: number){
    let randomNumberOfRooms = randomIntFromInterval(2,maxRooms);
    for(let i = 0; i < randomNumberOfRooms; i++){
        addNewRoomTo(dungeon);
    }
    return dungeon;
}

export function addDungeonToStoreReturnDescription(){
    let dungeon = addDungeonToStore();
    return dungeon.toString();
}

export function addDungeonWithRoomsReturnDescription(){
    let dungeon = addDungeonToStore();
    addRoomsTo(dungeon, 5);
    return dungeon.toString();
}