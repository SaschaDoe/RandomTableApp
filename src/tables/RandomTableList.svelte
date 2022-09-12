<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {RaceTable} from "./charTables/raceTable";
    import {AnimalTable} from "./charTables/animalTable";
    import {GermanMaleNameTable} from "./charTables/germanMaleNameTable";
    import {GenderTable} from "./charTables/genderTable";

    let tables = [new RaceTable(), new AnimalTable(), new GermanMaleNameTable(), new GenderTable()];
</script>


<ul>
    {#each tables as table}
        <RandomTable table="{table}"></RandomTable>
    {/each}
</ul>


<style>

</style>