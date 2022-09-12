<script lang="ts">
    import {Table} from "../tables/table";
    import RandomTable from "../tables/RandomTable.svelte";

    export let race = "Hobbit";
    export let cascadingTables = [] as Table[]
</script>

<h1>Character Name</h1>
<p>{race}</p>
{#each cascadingTables as table}
    <RandomTable table="{table}"></RandomTable>
{/each}