<script>
    import Index from "./Index.svelte";
    import {
        adventureTables,
        artefactsTables,
        charTables, dungeonTables,
        locationTables, monsterTables,
        nameTables,
        otherTables,
        talentTables, townTables
    } from "../tables/tableList";

    export let headings = ["Adventure","Character","Monster","Talent", "Location", "Dungeon", "Town", "Artefact", "Name", "Other"];

    export let indexes = [adventureTables, charTables,monsterTables,talentTables,locationTables,dungeonTables,townTables,artefactsTables,nameTables, otherTables]

    let toggleShowIndex = () => {
        showIndex = !showIndex;
    };
    let showIndex = false;
</script>
{#if showIndex === false}
    <div class="smartphone-visible open-overlap-btn" on:click={toggleShowIndex}>-></div>
{:else}
    <div class="index smartphone-visible scrollable">
        {#each headings as heading, index}
            <Index title = {heading} indexes = {indexes[index]}></Index>
        {/each}
    </div>
    <div class="smartphone-visible close-overlap-btn" on:click={toggleShowIndex}>&lt;-</div>
{/if}
<div class="index widescreenVisible scrollable">
    {#each headings as heading, index}
        <Index title = {heading} indexes = {indexes[index]}></Index>
    {/each}
</div>

<style>
    div{
        background: #333;
        color: white;
    }
    .index{
        position: fixed;
        top: 40px;
        left: 0;
        max-width: 180px;
        max-height: 480px;
        z-index: 100;
        visibility: hidden;
    }

    .scrollable{
        overflow: auto;
    }
    .open-overlap-btn{
        position: fixed;
        left: 0;
        top: 50%;
    }

    .close-overlap-btn{
        position: fixed;
        width: 30px;
        height: 30px;
        left: 30%;
        top: 50%;
    }

    .widescreenVisible{
        visibility: hidden;
    }

    .smartphone-visible{
        visibility: visible;
    }

    @media screen and (min-width: 1000px) {
        .widescreenVisible{
            visibility: visible;
        }

        .smartphone-visible{
            visibility: hidden;
        }
    }
</style>