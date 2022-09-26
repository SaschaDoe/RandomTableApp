<script lang="ts">
    import {Dungeon, generateRoom} from "../entites/site/dungeon.js";

    export let dungeon : Dungeon;
    let handleAddRoom = () =>{
        generateRoom(dungeon);
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
            <div>Treasures:</div>
            <ul>
                {#each room.treasures as treasure}
                    <li>{treasure}</li>
                {/each}
            </ul>
            <div>Furnishing:</div>
            <ul>
                {#each room.furnishing as furnish}
                    <li>{furnish}</li>
                {/each}
            </ul>
            <div>Characters:</div>
            <ul>
                {#each room.characters as char}
                    <li><a href={"#"+char}>{char}</a></li>
                {/each}
            </ul>
            <div>Obstacles:</div>
            <ul>
                {#each room.obstacles as obstacle}
                    <li>{obstacle}</li>
                {/each}
            </ul>
            <div>Traps:</div>
            <ul>
                {#each room.traps as trap}
                    <li>{trap}</li>
                {/each}
            </ul>
            <div>Monsters:</div>
            <ul>
                {#each room.monsters as monster, index}
                    <li>
                        <a href={"#"+monster}>{monster}</a>
                        <div>{room.monsterEncounters[index]}</div>
                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>