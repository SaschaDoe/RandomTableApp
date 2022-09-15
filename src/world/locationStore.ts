import {writable} from "svelte/store";
import {Site} from "./site";
import type {TableEntry} from "../tables/tableEntry";
import type {Table} from "../tables/table";


export let locations = writable([] as Site[]);
export let currentLocation = writable(Site);


export function applyLocationEntryFunctions(entry: TableEntry, location: Site){
    for (let i = 0; i < entry.functions.length; i++) {

        let func = entry.functions[i];
        let newLocation = func(location);

        locations.update(val => [...val, newLocation])

    }
}

export function applyLocationTableFunctions(entry: TableEntry, table: Table, location: Site){
    for (let i = 0; i < table.functions.length; i++) {
        let func = table.functions[i];
        func(location, entry);
    }
}
