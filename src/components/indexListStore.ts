import {writable} from "svelte/store";

export let titleStore = writable([] as string[])
export let indexesStore = writable([[] as string[]])