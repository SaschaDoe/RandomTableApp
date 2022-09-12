import type {Character} from "./character";
import {writable} from "svelte/store";

export let characters = writable([] as Character[]);