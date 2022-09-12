<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {Table} from "./table";
    import {RaceTable} from "./charTables/raceTable";

    let tables = [new RaceTable()];
</script>

<div class="container">
    <ul>
        {#each tables as table}
            <RandomTable table="{table}"></RandomTable>
        {/each}
    </ul>
</div>

<style>
    .container{
        width: 80%;
        margin: 0 auto; /* Center the DIV horizontally */
    }
</style>