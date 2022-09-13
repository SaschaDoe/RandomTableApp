<script lang="ts">
    import {addParty, characters} from "../world/worldStore.js";
import CharacterView from "./CharacterView.svelte";

let sizeOfParty = 1;

const addPartyHandler = ()=>{
    addParty(sizeOfParty);
}
</script>

<button on:click={addPartyHandler}>Add party</button>
<input type="number" bind:value={sizeOfParty}/>
{#each $characters as character}
    <CharacterView character={character} />
{/each}

<style>

</style>