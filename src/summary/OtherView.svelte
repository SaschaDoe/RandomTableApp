<script lang="ts">
    import {Entity} from "../world/entity";

    export let other : Entity;
</script>

<h1>{other.getUniqueName()}</h1>
<p>{other.description}</p>