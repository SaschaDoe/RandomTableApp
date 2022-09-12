<script lang="ts">
    import {Table} from "./table.ts";
    import Modal from '../components/Modal.svelte';
    import CharacterView from "../summary/CharacterView.svelte";
    import {TableEntry} from "./tableEntry";
    import {Character} from "../world/character.js";

    export let table : Table;

    let showModal = false;
    function handleCloseModal() {
        showModal = false;

    }

    function handleRole(){
        showModal = true;
        let textAfterCascade = table.roleWithCascade();
        character.race = textAfterCascade;
    }
    let character = new Character()
</script>

<h2>{table.title}</h2>
<button on:click="{handleRole}">{table.diceRole.toString()}</button>
{#if showModal}
    <Modal on:close="{handleCloseModal}">
        <CharacterView
                character={character}
        />
    </Modal>
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
