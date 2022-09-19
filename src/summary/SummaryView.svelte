<script lang="ts">
    import {characters, higherPowerBeingsStore} from "../world/character/charStore.js";
    import CharacterView from "./CharacterView.svelte";
    import {continentStore, sphereStore} from "../world/site/siteStore.js";
    import {WorldGenerator} from "../world/generators/worldGenerator";
    import SiteView from "./SiteView.svelte";
    import {Character} from "../world/character/character";
    import {Site} from "../world/site/site";
    import {indexesStore, titleStore} from "../components/indexListStore";
    import SummaryIndex from "../components/SummaryIndex.svelte";
    import {dungeonStore} from "../world/site/dungeonStore.js";
    import DungeonView from "./DungeonView.svelte";
    import {Dungeon} from "../world/site/dungeon";
    let titles = [];
    titles.push("Characters")
    titles.push("Higher Power Beings")
    titles.push("Continents")
    titles.push("Spheres")
    titles.push("Dungeons")
let sizeOfParty = 1;

const addPartyHandler = ()=>{
    let worldGenerator = new WorldGenerator();
    worldGenerator.generateWorld(sizeOfParty);
    titleStore.set(titles);
    let chars = [] as Character[];
    characters.subscribe((cs) => {
        chars = cs;
    })
    let charIndexes = [] as string[];
    for(let i = 0; i < chars.length; i++){
        let char = chars[i];
        charIndexes.push(char.getUniqueName());
    }

    let higherPowerBeings = [] as Character[];
    higherPowerBeingsStore.subscribe((cs) => {
        higherPowerBeings = cs;
    })
    let godsIndexes = [] as string[];
    for(let i = 0; i < higherPowerBeings.length; i++){
        let char = higherPowerBeings[i];
        godsIndexes.push(char.getUniqueName());
    }

    let continents = [] as Site[];
    continentStore.subscribe((cs) => {
        continents = cs;
    })
    let continentIndexes = [] as string[];
    for(let i = 0; i < continents.length; i++){
        let continent = continents[i];
        continentIndexes.push(continent.getUniqueName());
    }

    let spheres = [] as Site[];
    sphereStore.subscribe((cs) => {
        spheres = cs;
    })
    let spheresIndexes = [] as string[];
    for(let i = 0; i < spheres.length; i++){
        let continent = spheres[i];
        spheresIndexes.push(continent.getUniqueName());
    }

    let dungeons = [] as Dungeon[];
    dungeonStore.subscribe((cs) => {
        dungeons = cs;
    })
    let dungeonIndexes = [] as string[];
    for(let i = 0; i < dungeons.length; i++){
        let dungeon = dungeons[i];
        dungeonIndexes.push(dungeon.getUniqueName());
    }
    indexesStore.set([charIndexes,godsIndexes, continentIndexes, spheresIndexes, dungeonIndexes]);
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