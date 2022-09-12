<script lang="ts">
    import {Table} from "./table.ts";
    import Modal from '../components/Modal.svelte';
    import CharacterView from "../summary/CharacterView.svelte";

    export let table = new Table();
    let showModal = false;


</script>

<h2>{table.title}</h2>
<button on:click="{() => showModal = true}">{table.diceRole.toString()}</button>
{#if showModal}
    <Modal on:close="{() => showModal = false}">
        <CharacterView race="Human"></CharacterView>
    </Modal>
    {/if}

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
