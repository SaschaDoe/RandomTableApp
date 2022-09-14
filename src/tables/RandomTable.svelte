<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {
        applyEntryFunctions,
        applyTableFunctions,
        characters,
        currentChar
    } from "../world/worldStore";
    import Modal from "../components/Modal.svelte";
    import Result from "./Result.svelte";
    import {TableEntry} from "./tableEntry";

    export let table : Table;

    function handleCloseModal() {
        isModalVisible = false;
    }

    const handleAdd = () => {
        $currentChar = new Character();
        applyTableFunctions(entry,table,$currentChar);
        applyEntryFunctions(entry,$currentChar);

        $characters.push($currentChar)
        isModalVisible = false;
    }

    function handleRoleWithModal(){
        handleRole();
        isModalVisible = true;
    }

    function handleRole(){
        entry = table.roleWithCascade();
    }
    let entry = new TableEntry();
    let isModalVisible = false;
</script>

<h2>{table.title}</h2>
<button on:click="{handleRoleWithModal}">{table.diceRole.toString()}</button>
{#if isModalVisible}
    <Modal on:close="{handleCloseModal}">
        <Result result={entry.text}/>
        <button on:click={handleRole}>Role again</button>
        <button on:click={handleAdd}>Add as character</button>
    </Modal>
{/if}

{#if table.entries.length > 19}
<div class="row">
    <div class="column">
        <table>
            {#each table.entries.slice(0,table.entries.length/2) as entry}
                <tr>
                    <td>{entry.toString()}</td>
                    <td>{entry.text}</td>
                </tr>
            {/each}
        </table>
    </div>
    <div class="column">
        <table>
            {#each table.entries.slice(table.entries.length/2) as entry}
                <tr>
                    <td>{entry.toString()}</td>
                    <td>{entry.text}</td>
                </tr>
            {/each}
        </table>
    </div>
</div>
    {:else}
    <table>
        {#each table.entries as entry}
            <tr>
                <td>{entry.toString()}</td>
                <td>{entry.text}</td>
            </tr>
        {/each}
    </table>
    {/if}
<style>
    table, th, td{
        border: 1px solid;
    }

    .row {
        margin-left:-5px;
        margin-right:-5px;
    }

    .column {
        float: left;
        width: 50%;
        padding: 5px;
    }

    /* Clearfix (clear floats) */
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    * {
        box-sizing: border-box;
    }

</style>
