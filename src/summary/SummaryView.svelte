<script lang="ts">

import {characters} from "../world/worldStore.js";
import CharacterView from "./CharacterView.svelte";
</script>

{#each $characters as character}
    <CharacterView character={character} />
{/each}

<style>

</style>