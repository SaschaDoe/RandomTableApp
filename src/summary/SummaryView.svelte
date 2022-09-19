<script lang="ts">
    import {characters, higherPowerBeingsStore} from "../world/character/charStore.js";
    import CharacterView from "./CharacterView.svelte";
    import {continentStore, sphereStore} from "../world/site/siteStore.js";
    import {WorldGenerator} from "../world/generators/worldGenerator";
    import SiteView from "./SiteView.svelte";
    import SummaryIndex from "../components/SummaryIndex.svelte";
    import {dungeonStore} from "../world/site/dungeonStore.js";
    import DungeonView from "./DungeonView.svelte";
    import {updateIndex} from "./updateSummaryIndex";

let sizeOfParty = 1;


const addPartyHandler = ()=>{
    let worldGenerator = new WorldGenerator();
    worldGenerator.generateWorld(sizeOfParty);
    updateIndex()
}

</script>

<SummaryIndex></SummaryIndex>

<button on:click={addPartyHandler}>Add party</button>
<input type="number" bind:value={sizeOfParty}/>
{#each $characters as character}
    <div id={character.getUniqueName()}>
        <CharacterView character={character} />
    </div>

{/each}
{#each $higherPowerBeingsStore as god}
    <div id={god.getUniqueName()}>
        <CharacterView character={god} />
    </div>

{/each}
{#each $continentStore as site}
    <div id={site.getUniqueName()}>
        <SiteView site={site} />
    </div>
{/each}

{#each $sphereStore as sphere}
    <div id={sphere.getUniqueName()}>
        <SiteView site={sphere} />
    </div>
{/each}

{#each $dungeonStore as dungeon}
    <div id={dungeon.getUniqueName()}>
        <DungeonView dungeon={dungeon} />
    </div>
{/each}
<div class="back-btn">
    <a href="#top">/|\</a>
</div>


<style>
    li{
        list-style: none;
    }

    .back-btn{
        position: fixed;
        top: 10%;
        left: 95%;
        z-index: 100;
        background-color: rgba(0,0,0, 0.9);
    }

    .back-btn > a{
        color: white;
    }

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blueviolet;
    }


</style>