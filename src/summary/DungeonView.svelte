<script lang="ts">
    import {Dungeon} from "../entites/dungeons/dungeon";
    import {addNewRoomTo} from "../entites/dungeons/dungeonStore";

    export let dungeon : Dungeon;
    let handleAddRoom = () =>{
        addNewRoomTo(dungeon);
        dungeon = dungeon;
    };
</script>

<h1>{"Dungeon "+dungeon.getUniqueName()}</h1>
<p>{dungeon.entryBuilding+" of "+dungeon.name}</p>
<p>{"Structure: "+dungeon.structure}</p>
<button on:click={handleAddRoom}>Add Room</button>
<ul>
    {#each dungeon.rooms as room, index}
        <li>
            <div>{"Room "+index}</div>
            {#if
                room.treasures.length === 0 &&
                room.furnishing.length === 0 &&
                room.obstacles.length === 0 &&
                room.traps.length === 0 &&
                room.monsters.length === 0 &&
                room.characters.length === 0
            }
                <div>is totally empty.</div>
            {/if}
            {#if room.treasures.length > 0}
                <div>Treasures:</div>
                <ul>
                    {#each room.treasures as treasure}
                        <li>{treasure}</li>
                    {/each}
                </ul>
            {/if}
            {#if room.furnishing.length > 0}
                <div>Furnishing:</div>
                <ul>
                    {#each room.furnishing as furnish}
                        <li>{furnish}</li>
                    {/each}
                </ul>
            {/if}
            {#if room.characters.length > 0}
                <div>Characters:</div>
                <ul>
                    {#each room.characters as char}
                        <li><a href={"#"+char}>{char}</a></li>
                    {/each}
                </ul>
            {/if}
            {#if room.obstacles.length > 0}
                <div>Obstacles:</div>
                <ul>
                    {#each room.obstacles as obstacle}
                        <li>{obstacle}</li>
                    {/each}
                </ul>
            {/if}
            {#if room.traps.length > 0}
                <div>Traps:</div>
                <ul>
                    {#each room.traps as trap}
                        <li>{trap}</li>
                    {/each}
                </ul>
            {/if}
            {#if room.monsters.length > 0}
                <div>Monsters:</div>
                <ul>
                    {#each room.monsters as monster, index}
                        <li>
                            <a href={"#"+monster.getUniqueName()}>{monster.getUniqueName()}</a>
                            <div>{room.encounters[index]}</div>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>