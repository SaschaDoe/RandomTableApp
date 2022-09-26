<script lang="ts">
    import {dungeonStore} from "../entites/site/dungeonStore";
    import {updateIndex} from "./updateSummaryIndex";
    import {DungeonFactory} from "../entites/dungeons/dungeonFactory";
    import {Continent} from "../entites/continent/continent";

    export let continent : Continent;
    let dungeons = [];
    let handleAddDungeon = () => {
        let dungeon = new DungeonFactory().create();
        continent.dungeons.push(dungeon)
        dungeonStore.update(dungeonStore => {
            dungeonStore.push(dungeon)
            return dungeonStore;
        })
        dungeons = continent.dungeons;
        updateIndex();
    };
</script>
<h1>{continent.getUniqueName()}</h1>
<p>{continent.description}</p>
{#if continent.localSpheres.length > 0}
<div>Spheres:</div>
{/if}
<ul>
{#each continent.localSpheres as sphere}
    <li><a href={"#"+sphere.getUniqueName()}>{sphere.name}</a></li>
{/each}
</ul>
<button on:click={handleAddDungeon}>Add Dungeon</button>
{#each dungeons as dungeon}
<div><a href={"#"+dungeon.getUniqueName()}>{dungeon.getUniqueName()}</a></div>
{/each}