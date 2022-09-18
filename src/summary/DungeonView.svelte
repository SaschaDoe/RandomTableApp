<script lang="ts">
    import {Dungeon} from "../world/dungeon.js";

    export let dungeon : Dungeon;
</script>

<h1>{dungeon.getUniqueName()}</h1>
<p>{dungeon.entryBuilding}</p>