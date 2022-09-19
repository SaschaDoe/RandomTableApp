<script lang="ts">
    import {Dungeon} from "../world/site/dungeon.js";

    export let dungeon : Dungeon;
</script>

<h1>{dungeon.getUniqueName()}</h1>
<p>{dungeon.entryBuilding+" of "+dungeon.name}</p>