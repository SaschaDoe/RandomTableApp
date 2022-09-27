<script lang="ts">
    import {Table} from "./table.ts";
    import {addNewNSCToCharacterStoreReturnUniqueName} from "../entites/character/charStore";
    import Modal from "../components/Modal.svelte";
    import {TableType} from "./tableType";
    import Entry from "./Entry.svelte";
    import {RoleResult} from "./roleResult";
    import {CharacterFactory} from "../entites/character/characterFactory";
    import {ContinentFactory} from "../entites/continent/continentFactory";
    import {addNewContinentToStore} from "../entites/continent/continentStore";

    export let table : Table;

    function handleAdd(){
        if(table.tableType === TableType.Character){
            addNewNSCToCharacterStoreReturnUniqueName(new CharacterFactory().withTable(table,roleResult))
            isModalVisible = false;
        }
        if(table.tableType === TableType.Location){
            addNewContinentToStore(new ContinentFactory().withTable(table,roleResult))
            isModalVisible = false;
        }
        isModalVisible = false;

    }

    function handleRoleWithModal(){
        handleRole();
        isModalVisible = true;
    }

    function handleRole(){
        roleResult = table.roleWithCascade();
    }
    let roleResult = new RoleResult();
    let isModalVisible = false;
</script>

<h2>{table.title}</h2>
<button on:click="{handleRoleWithModal}">{table.diceRole.toString()}</button>
<Modal bind:isVisible={isModalVisible}
       bind:title={table.title}
       bind:text={roleResult.fullText}
       bind:tableType = {table.tableType}
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

    @media screen and (min-width: 600px) {
        .column{
            width: 30%;
        }
    }

</style>
