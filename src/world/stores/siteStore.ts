import {writable} from "svelte/store";
import {Site} from "../site";
import type {Table} from "../../tables/table";
import type {RoleResult} from "../../tables/roleResult";


export let sites = writable([] as Site[]);
export let currentLocation = writable(Site);
export let spheres = writable([] as Site[]);


export function applyLocationEntryFunctions(roleResult: RoleResult, location: Site){
    for (let i = 0; i < roleResult.functions.length; i++) {

        let func = roleResult.functions[i];
        let newLocation = func(location);

        sites.update(val => [...val, newLocation])

    }
}

export function applyLocationTableFunctions(roleResult: RoleResult, table: Table, location: Site){
    for (let i = 0; i < table.functions.length; i++) {
        let func = table.functions[i];
        func(location, roleResult);
    }
}
