<script lang="ts">
    import {Entity} from "../entites/entity";

    export let other : Entity;
</script>

<h1>{other.getUniqueName()}</h1>
<p>{other.toString()}</p>

<style>
    p{
        white-space: pre-line
    }
</style>