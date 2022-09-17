<script lang="ts">
    import {Site} from "../world/site";

    export let site : Site;
</script>
<h1>{site.getUniqueName()}</h1>
<p>Description: {site.description}</p>
<div>Spheres:</div>
<ul>
{#each site.spheres as sphere}
    <li>{sphere.name + ": "+ sphere.description}</li>
{/each}
</ul>