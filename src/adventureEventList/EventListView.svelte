<script>
    import {addEventToStore, eventList, resetEventList} from "./eventList";
    import {currentAdventurePhase} from "./eventList";
    import {AdventurePhases} from "../tables/adventureTables/adventurePhases";

    let handleAddEvent = ()=>{
       addEventToStore()
    };
    let handleReset = () => {
        resetEventList();
    };
</script>

{#if $currentAdventurePhase === AdventurePhases.End}
    <button class="flying left not-allowed" >Add Event</button>
{:else}
    <button class="flying left" on:click={handleAddEvent}>Add Event</button>
{/if}
<button class="flying right" on:click={handleReset}>Reset List</button>
<ul>
    {#each $eventList as event}
        <li>{event}</li>
    {/each}
</ul>

<style>
    .flying{
        position: fixed;
        min-width: 30px;
        z-index: 100;
    }

    .left{
        top: 50px;
        left: 5px;
    }

    .right{
        top: 80px;
        left: 5px;
    }

    .not-allowed{
        cursor: not-allowed;
    }
</style>