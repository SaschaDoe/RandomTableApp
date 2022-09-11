<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {Table} from "./table";

    let list = [new Table(), new Table()];
</script>

<div class="container">
    <ul>
        {#each list as entry}
            <RandomTable
                entries=entry
            />
        {/each}
    </ul>
</div>

<style>
    .container{
        width: 80%;
        margin: 0 auto; /* Center the DIV horizontally */
    }
</style>