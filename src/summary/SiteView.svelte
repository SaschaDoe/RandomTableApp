<script lang="ts">
    import {updateIndex} from "./updateSummaryIndex";
    import {Continent} from "../entites/continent/continent";
    import {addDungeonToStore} from "../entites/dungeons/dungeonStore";

    export let continent : Continent;
    let dungeons = [];
    let handleAddDungeon = () => {
        let dungeon = addDungeonToStore()
        continent.dungeons.push(dungeon)
        dungeons = continent.dungeons;
        updateIndex();
    };
</script>
<h1>{continent.getUniqueName()}</h1>
<p>{continent.description}</p>
{#if continent.spheres.length > 0}
<div>Spheres:</div>
{/if}
<ul>
{#each continent.spheres as sphere}
    <li>{sphere}</li>
{/each}
</ul>
<button on:click={handleAddDungeon}>Add Dungeon</button>
{#each dungeons as dungeon}
<div><a href={"#"+dungeon.getUniqueName()}>{dungeon.getUniqueName()}</a></div>
{/each}