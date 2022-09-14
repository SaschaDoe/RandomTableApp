<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {
        applyEntryFunctions,
        applyTableFunctions,
        characters,
        currentChar
    } from "../world/worldStore";
    import {TableEntry} from "./tableEntry";
    import Modal from "../components/Modal.svelte";

    export let table : Table;

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
<Modal bind:isVisible={isModalVisible}
       bind:title={table.title}
       bind:text={entry.fullText}
       handleAdd={handleAdd}
       handleRole={handleRole}/>

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
