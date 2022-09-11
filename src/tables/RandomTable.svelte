<script lang="ts">
    import {Table} from "./table.ts";

    export let table = new Table();
</script>

<h2>{table.title}</h2>
<button>{table.diceRole.toString()}</button>
<table>
    <tr>
        {#each table.entries as entry}
            <td>{entry.toString()}</td>
            <td>{entry.text}</td>
        {/each}
    </tr>
</table>

<style>
    table, th, td{
        border: 1px solid;
    }
</style>
