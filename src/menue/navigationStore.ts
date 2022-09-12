import { writable } from 'svelte/store'

export enum Pages {
    RandomTablePage = "Random Table Page",
    SummaryPage = "Summary Page",
}

export const currentPage = writable(Pages.RandomTablePage)
