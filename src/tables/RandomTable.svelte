<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {characters, currentChar} from "../world/worldStore";
    import Modal from "../components/Modal.svelte";
    import Result from "./Result.svelte";
    import {GetId} from "../world/idGetter.js";

    export let table : Table;

    function handleCloseModal() {
        isModalVisible = false;
    }

    const handleAdd = () => {
        $currentChar = new Character();
        for(let i = 0; i < table.functions.length; i++){
            let func = table.functions[i];
            func($currentChar,modalText);
        }
        $characters.push($currentChar)
        isModalVisible = false;
    }

    function handleRole(){
        modalText = table.roleWithCascade();
        isModalVisible = true;
        //TODO table.function but only to the "ADD" button. In the modal there shall be only the entry
    }
    let modalText = "";
    let isModalVisible = false;
</script>

<h2>{table.title}</h2>
<button on:click="{handleRole}">{table.diceRole.toString()}</button>
{#if isModalVisible}
    <Modal on:close="{handleCloseModal}">
        <Result result={modalText}/>
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
