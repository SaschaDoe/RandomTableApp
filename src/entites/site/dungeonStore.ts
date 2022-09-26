import {writable} from "svelte/store";
import type {Dungeon} from "../dungeons/dungeon";

export let dungeonStore = writable([] as Dungeon[]);