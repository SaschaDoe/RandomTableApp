import {writable} from "svelte/store";
import type {Dungeon} from "../dungeon";

export let dungeonStore = writable([] as Dungeon[]);