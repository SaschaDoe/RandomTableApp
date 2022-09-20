<script lang="ts">
    import {Dungeon} from "../world/site/dungeon.js";

    export let dungeon : Dungeon;
</script>

<h1>{"Dungeon "+dungeon.getUniqueName()}</h1>
<p>{dungeon.entryBuilding+" of "+dungeon.name}</p>
<p>{"Structure: "+dungeon.structure}</p>
<ul>
    {#each dungeon.rooms as room}
        <li>
            <div>Room</div>
            <div>Treasures:</div>
            <ul>
                {#each room.treasures as treasure}
                    <li>{treasure}</li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>