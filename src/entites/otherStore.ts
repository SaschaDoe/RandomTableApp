import {writable} from "svelte/store";
import type {Entity} from "./entity";

export let otherStore = writable([] as Entity[]);