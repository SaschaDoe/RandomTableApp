import {writable} from "svelte/store";
import type {Artefact} from "./artefact";

export let artefactStore = writable([] as Artefact[]);