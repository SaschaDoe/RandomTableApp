<script lang="ts">
    import {addNSCToCharacterStore, characters, higherPowerBeingsStore} from "../entites/character/charStore.js";
    import CharacterView from "./CharacterView.svelte";
    import {continentStore, sphereStore} from "../entites/site/siteStore.js";
    import {WorldGenerator} from "../entites/generators/worldGenerator";
    import SiteView from "./SiteView.svelte";
    import SummaryIndex from "../components/SummaryIndex.svelte";
    import {dungeonStore} from "../entites/site/dungeonStore.js";
    import DungeonView from "./DungeonView.svelte";
    import {updateIndex} from "./updateSummaryIndex";
    import {addArtefactToStore, artefactStore} from "../entites/artefacts/artefactStore.js";
    import ArtefactView from "./ArtefactView.svelte";
    import {addMonsterToStore, monsterStore} from "../entites/monster/monsterStore.js";
    import MonsterView from "./MonsterView.svelte";
    import {Dungeon} from "../entites/site/dungeon";
    import {otherStore} from "../entites/otherStore.js";
    import OtherView from "./OtherView.svelte";
    import {SignFactory} from "../entites/signs/signFactory";

    let sizeOfParty = 1;

    const addPartyHandler = ()=>{
        let worldGenerator = new WorldGenerator();
        worldGenerator.generateWorld(sizeOfParty);
        updateIndex()
    }

    let addNSC = () => {
        addNSCToCharacterStore();
        updateIndex()
    };
    let addArtefactForView= () => {
        addArtefactToStore();
        updateIndex()
    };
    let addDungeon = () =>{
        let dungeon = new Dungeon();
        dungeonStore.update(dungeons => {
            dungeons.push(dungeon);
            return dungeons;
        })
        updateIndex()
    };

    let addMonster = () => {
        addMonsterToStore()
        updateIndex()
    }
    let addSign = () => {
        let signFactory = new SignFactory();
        signFactory.addSignToStore();
        updateIndex()
    };

</script>

<SummaryIndex></SummaryIndex>

<button on:click={addPartyHandler}>Add party member</button>
<input type="number" bind:value={sizeOfParty}/>
<button on:click={addNSC}>Add NSC</button>
<button on:click={addArtefactForView}>Add Artefact</button>
<button on:click={addDungeon}>Add Dungeon</button>
<button on:click={addMonster}>Add Monster</button>
<button on:click={addSign}>Add Sign</button>
{#each $characters as character}
    <div id={character.getUniqueName()}>
        <CharacterView character={character} />
    </div>

{/each}
{#each $higherPowerBeingsStore as god}
    <div id={god.getUniqueName()}>
        <CharacterView character={god} />
    </div>

{/each}
{#each $monsterStore as monster}
    <div id={monster.getUniqueName()}>
        <MonsterView monster={monster} />
    </div>

{/each}
{#each $continentStore as site}
    <div id={site.getUniqueName()}>
        <SiteView site={site} />
    </div>
{/each}

{#each $sphereStore as sphere}
    <div id={sphere.getUniqueName()}>
        <SiteView site={sphere} />
    </div>
{/each}

{#each $dungeonStore as dungeon}
    <div id={dungeon.getUniqueName()}>
        <DungeonView dungeon={dungeon} />
    </div>
{/each}

{#each $artefactStore as artefact}
    <div id={artefact.getUniqueName()}>
        <ArtefactView artefact={artefact} />
    </div>
{/each}

{#each $otherStore as other}
    <div id={other.getUniqueName()}>
        <OtherView other={other} />
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

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blueviolet;
    }

    input{
        max-width: 30px;
        height: 23px;
    }


</style>