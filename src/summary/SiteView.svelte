<script lang="ts">
    import {Site} from "../world/site/site";
    import {Dungeon} from "../world/site/dungeon";
    import {dungeonStore} from "../world/site/dungeonStore";

    export let site : Site;
    let dungeons = [];
    let handleAddDungeon = () => {
        let dungeon = new Dungeon();
        site.dungeons.push(dungeon)
        dungeonStore.update(dungeonStore => {
            dungeonStore.push(dungeon)
            return dungeonStore;
        })
        dungeons = site.dungeons;
    };
</script>
<h1>{site.getUniqueName()}</h1>
<p>{site.description}</p>
{#if site.localSpheres.length > 0}
<div>Spheres:</div>
{/if}
<ul>
{#each site.localSpheres as sphere}
    <li><a href={"#"+sphere.getUniqueName()}>{sphere.name}</a></li>
{/each}
</ul>
<button on:click={handleAddDungeon}>Add Dungeon</button>
{#each dungeons as dungeon}
<div><a href={"#"+dungeon.getUniqueName()}>{dungeon.getUniqueName()}</a></div>
{/each}