<script lang="ts">
    import {Site} from "../world/site";

    export let location : Site;
</script>
<h1>{location.name}</h1>
<p>Description: {location.description}</p>