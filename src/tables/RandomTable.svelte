<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {characters, currentChar} from "../world/worldStore";
    import Modal from "../components/Modal.svelte";
    import Result from "./Result.svelte";

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

    function handleRoleWithModal(){
        handleRole();
        isModalVisible = true;
    }

    function handleRole(){
        modalText = table.roleWithCascade();
        lastRolled = table.getAndResetPreviouslyRolled()
    }
    let lastRolled = "";
    let modalText = "";
    let isModalVisible = false;
</script>

<h2>{table.title}</h2>
<button on:click="{handleRoleWithModal}">{table.diceRole.toString()}</button>
{#if isModalVisible}
    <Modal on:close="{handleCloseModal}">
        <Result result={lastRolled}></Result>
        <Result result={modalText}/>
        <button on:click={handleRole}>Role again</button>
        <button on:click={handleAdd}>Add as character</button>
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
