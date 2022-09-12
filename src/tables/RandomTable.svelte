<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {isModalVisible} from "../menue/modalStore.js";
    import TableModal from "./TableModal.svelte";

    export let table : Table;

    function handleRole(){
        $isModalVisible = true;
        character.race = table.roleWithCascade();
    }
    let character = new Character()
</script>

<h2>{table.title}</h2>
<button on:click="{handleRole}">{table.diceRole.toString()}</button>
{#if $isModalVisible}
    <TableModal character={character} />
{/if}

<table>
    {#each table.entries as entry}
        <tr>
            <td>{entry.toString()}</td>
            <td>{entry.text}</td>
        </tr>
    {/each}
</table>

<style>
    table, th, td{
        border: 1px solid;
    }
</style>
