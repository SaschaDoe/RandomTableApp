<script lang="ts">
    import {Table} from "./table.ts";
    import {Character} from "../world/character.js";
    import {applyEntryFunctions, applyTableFunctions, characters, currentChar} from "../world/charStore";
    import {TableEntry} from "./tableEntry";
    import Modal from "../components/Modal.svelte";
    import {TableType} from "./tableType";
    import {
        applyLocationTableFunctions,
        applyLocationEntryFunctions,
        currentLocation,
        locations
    } from "../world/locationStore";
    import {Site} from "../world/site";
    import Entry from "./Entry.svelte";

    export let table : Table;

    function handleAdd(){
        if(table.tableType === TableType.Character){
            $currentChar = new Character();
            applyTableFunctions(entry,table,$currentChar);
            applyEntryFunctions(entry,$currentChar);

            $characters.push($currentChar)
            isModalVisible = false;
        }
        if(table.tableType === TableType.Location){
            $currentLocation = new Site();
            applyLocationTableFunctions(entry,table,$currentLocation);
            applyLocationEntryFunctions(entry,$currentLocation);

            $locations.push($currentLocation)
            isModalVisible = false;
        }
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
                <Entry entry={entry}></Entry>
            {/each}
        </table>
    </div>
    <div class="column">
        <table>
            {#each table.entries.slice(table.entries.length/2) as entry}
                <Entry entry={entry}></Entry>
            {/each}
        </table>
    </div>
</div>
    {:else}
    <table>
        {#each table.entries as entry}
            <Entry entry={entry}></Entry>
        {/each}
    </table>
    {/if}
<style>
    table, th{
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
