<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {RaceTable} from "./charTables/raceTable";
    import {AnimalTable} from "./charTables/animalTable";
    import {GermanMaleNameTable} from "./charTables/germanMaleNameTable";
    import {GenderTable} from "./charTables/genderTable";
    import {DisadvantageTable} from "./charTables/disadvantageTable";
    import {MotivationTable} from "./charTables/motivationTable";

    let tables = [new RaceTable(),
        new GenderTable(),
        new AnimalTable(),
        new DisadvantageTable(),
        new MotivationTable(),
        new GermanMaleNameTable(), ];
</script>


<ul>
    {#each tables as table}
        <RandomTable table={table}></RandomTable>
    {/each}
</ul>


<style>

</style>