<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {isModalVisible} from "../menue/modalStore.js";
    import {characters, currentChar} from "../world/worldStore";
    import Modal from "../components/Modal.svelte";
    import CharacterView from "../summary/CharacterView.svelte";
    import {writable} from "svelte/store";

    export let table : Table;

    function handleCloseModal() {
        $isModalVisible = false;
    }

    const handleAdd = () => {
        $characters.push($currentChar)
        $isModalVisible = false;
    }

    function handleRole(){
        $currentChar = new Character();
        $isModalVisible = true;
        //TODO table.function but only to the "ADD" button. In the modal there shall be only the entry
    }
</script>

<h2>{table.title}</h2>
<button on:click="{handleRole}">{table.diceRole.toString()}</button>
{#if $isModalVisible}
    <Modal on:close="{handleCloseModal}">
        <CharacterView character={$currentChar}/>
        <button on:click={handleAdd}>Add</button>
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
