<script lang="ts">
    import {characters} from "../world/stores/charStore.js";
    import CharacterView from "./CharacterView.svelte";
    import {sites, spheres} from "../world/stores/siteStore.js";
    import {WorldGenerator} from "../world/generators/worldGenerator";
    import SiteView from "./SiteView.svelte";

let sizeOfParty = 1;

const addPartyHandler = ()=>{
    let worldGenerator = new WorldGenerator();
    worldGenerator.generateWorld(sizeOfParty);
}
    let handleShowIndex = () => {
        showIndex = !showIndex;
    };
    let showIndex = false;
    let handleShowChars = () =>{
        showChars = !showChars;
    };
    let showChars = false;
    let handleShowSites = () =>{
        showSites = !showSites;
    };
    let showSites = false;
</script>

{#if showIndex === false}
    <div class="index-dropdown" on:click={handleShowIndex}>-></div>
{:else}
    <div class="index-overlap">
        <div class="index-dropdown-close" on:click={handleShowIndex} >&lt;-</div>
        <div class="char-btn" on:click={handleShowChars}>{"Characters ("+$characters.length+")"}</div>
        {#if showChars}
            <ul>
                {#each $characters as char}
                    <li>
                        <a class="overlap-list" href={"#"+char.getUniqueName()}>{char.getUniqueName()}</a>
                    </li>
                {/each}
            </ul>
        {/if}
        <div class="char-btn" on:click={handleShowSites}>{"Sites ("+$sites.length+")"}</div>
        {#if showSites}
            <ul>
                {#each $sites as site}
                    <li>
                        <a class="overlap-list" href={"#"+site.getUniqueName()}>{site.getUniqueName()}</a>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{/if}

<div id="#top" class="index">
    <div class="char-btn" on:click={handleShowChars}>{"Characters ("+$characters.length+")"}</div>
    {#if showChars}
        <ul>
            {#each $characters as char}
                <li>
                    <a href={"#"+char.getUniqueName()}>{char.getUniqueName()}</a>
                </li>
            {/each}
        </ul>
    {/if}
    <div class="char-btn" on:click={handleShowSites}>{"Sites ("+$sites.length+")"}</div>
    {#if showSites}
        <ul>
            {#each $sites as site}
                <li>
                    <a class="overlap-list" href={"#"+site.getUniqueName()}>{site.getUniqueName()}</a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<button on:click={addPartyHandler}>Add party</button>
<input type="number" bind:value={sizeOfParty}/>
{#each $characters as character}
    <div id={character.getUniqueName()}>
        <CharacterView character={character} />
    </div>

{/each}
{#each $sites as site}
    <div id={site.getUniqueName()}>
        <SiteView site={site} />
    </div>
{/each}
<p>Spheres</p>
{#each $spheres as sphere}
    <div id={sphere.getUniqueName()}>
        <SiteView site={sphere} />
    </div>
{/each}
<div class="back-btn">
    <a href="#top">/|\</a>
</div>



<style>
    li{
        list-style: none;
    }

    .back-btn{
        position: fixed;
        top: 10%;
        left: 95%;
        z-index: 100;
        background-color: rgba(0,0,0, 0.9);
    }

    .back-btn > a{
        color: white;
    }

    .index{
        position: fixed;
        top: 5%;
        left: -30px;
        visibility: hidden;
        max-height: 90%;
        overflow-x: scroll;
        overflow-y: hidden;
    }

    .char-btn{
        position: relative;
        left: 31px;
        width: 140px;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .char-btn:hover{
        cursor: pointer;
    }

    .index-overlap{
        position: fixed;
        top: 5%;
        left: -30px;
        visibility: visible;
        max-height: 90%;
        overflow: scroll;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .index-dropdown{
        position: fixed;
        top: 50%;
        left: 0;
        visibility: visible;
        font-size: x-large;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .overlap-list{
        color: white;
    }

    .index-dropdown-close{
        position: fixed;
        top: 50%;
        left: 110px;
        visibility: visible;
        font-size: x-large;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .index-dropdown:hover{
        cursor: pointer;
    }

    .index-dropdown-close:hover{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blueviolet;
    }

    @media screen and (min-width: 720px) {
        .index{
            visibility: visible;
            overflow-y: hidden;
        }

        .index-overlap{
            visibility: hidden;
        }

        .index-dropdown{
            visibility: hidden;
        }

        .index-dropdown-close{
            visibility: hidden;
        }
    }
</style>