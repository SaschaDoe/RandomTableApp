<script lang="ts">
    import {Site} from "../world/site";

    export let site : Site;
</script>
<h1>{site.getUniqueName()}</h1>
<p>Description: {site.description}</p>
{#if site.localSpheres.length > 0}
<div>Spheres:</div>
{/if}
<ul>
{#each site.localSpheres as sphere}
    <li><a href={"#"+sphere.getUniqueName()}>{sphere.name}</a></li>
{/each}
</ul>