<script lang="ts">
    import {
        addNewNSCToCharacterStoreReturnUniqueName,
        addNSCsToCharacterStore, addRulerToStore,
        characters, createHigherPower,
        higherPowerBeingsStore
    } from "../entites/character/charStore.js";
    import CharacterView from "./CharacterView.svelte";
    import SiteView from "./SiteView.svelte";
    import SummaryIndex from "../components/SummaryIndex.svelte";
    import DungeonView from "./DungeonView.svelte";
    import {updateIndex} from "./updateSummaryIndex";
    import {addNewArtefactToStore, artefactStore} from "../entites/artefacts/artefactStore.js";
    import ArtefactView from "./ArtefactView.svelte";
    import {addNewMonsterToStoreReturnUniqueName, monsterStore} from "../entites/monster/monsterStore.js";
    import MonsterView from "./MonsterView.svelte";
    import {otherStore} from "../entites/otherStore.js";
    import OtherView from "./OtherView.svelte";
    import {addDungeonToStore} from "../entites/dungeons/dungeonStore";
    import {addNewSignToStore} from "../entites/signs/signStore";
    import {dungeonStore} from "../entites/dungeons/dungeonStore.js";
    import {continentStore} from "../entites/continent/continentStore.js";
    import {CharacterFactory} from "../entites/character/characterFactory";
    import {signStore} from "../entites/signs/signStore.js";
    import SignView from "./SignView.svelte";
    import {addNewFractionToStore} from "../entites/fractions/fractionStore";
    import {fractionStore} from "../entites/fractions/fractionStore.js";
    import FractionView from "./FractionView.svelte";
    import {addNewTownToStore} from "../entites/towns/townStore";
    import {townStore} from "../entites/towns/townStore.js";
    import {addNewNation} from "../entites/nations/nationStore";
    import {nationStore} from "../entites/nations/nationStore.js";

    let sizeOfParty = 1;

    const addPartyHandler = ()=>{
        addNSCsToCharacterStore(new CharacterFactory().createParty(sizeOfParty))
        updateIndex()
    };
    let addNSC = () => {
        addNewNSCToCharacterStoreReturnUniqueName();
        updateIndex()
    };
    let addArtefactForView= () => {
        addNewArtefactToStore();
        updateIndex();
    };
    let addDungeon = () =>{
        addDungeonToStore();
        updateIndex();
    };

    let addMonster = () => {
        addNewMonsterToStoreReturnUniqueName()
        updateIndex()
    }
    let addSign = () => {
        addNewSignToStore()
        updateIndex()
    };
    let addFraction = ()=>{
        addNewFractionToStore();
        updateIndex();
    };
    let addTownForView = () =>{
        addNewTownToStore();
        updateIndex();
    };
    let addNationToView = () => {
        let nation = addNewNation();
        addRulerToStore(nation);
        updateIndex();
    };
    let addHigherPower = () => {
        createHigherPower();
        updateIndex();
    };

</script>

<SummaryIndex></SummaryIndex>

<button on:click={addPartyHandler}>Add party member</button>
<input type="number" bind:value={sizeOfParty}/>
<button on:click={addNSC}>Add NSC</button>
<button on:click={addHigherPower}>Add Higher Power</button>
<button on:click={addFraction}>Add Fraction</button>
<button on:click={addArtefactForView}>Add Artefact</button>
<button on:click={addNationToView}>Add Nation</button>
<button on:click={addTownForView}>Add Town</button>
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

{#each $fractionStore as fraction}
    <div id={fraction.getUniqueName()}>
        <FractionView fraction={fraction} />
    </div>
{/each}
{#each $monsterStore as monster}
    <div id={monster.getUniqueName()}>
        <MonsterView monster={monster} />
    </div>

{/each}
{#each $continentStore as continent}
    <div id={continent.getUniqueName()}>
        <SiteView continent={continent} />
    </div>
{/each}

{#each $nationStore as nation}
    <div id={nation.getUniqueName()}>
        <OtherView other={nation} />
    </div>
{/each}


{#each $townStore as town}
    <div id={town.getUniqueName()}>
        <OtherView other={town} />
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

{#each $signStore as sign}
    <div id={sign.getUniqueName()}>
        <SignView sign={sign} />
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