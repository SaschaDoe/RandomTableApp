<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {RaceTable} from "./charTables/raceTable";
    import {AnimalTable} from "./charTables/animalTable";

    let tables = [new RaceTable(), new AnimalTable()];
</script>


<ul>
    {#each tables as table}
        <RandomTable table="{table}"></RandomTable>
    {/each}
</ul>


<style>

</style>