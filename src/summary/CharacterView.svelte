<script lang="ts">
    import {Character} from "../entites/character/character";
    import {CharacterFactory} from "../entites/character/characterFactory";

    export let character: Character;

    let characterFactory = new CharacterFactory();
    let handleAddCurse = () =>{
        character = characterFactory.clone(character).addCurse().create();
    };
    let handleAddAdvantage = ()=>{
        character = characterFactory.clone(character).addAdvantage().create();
    };
    let handleAddDisadvantage = () =>{
        character = characterFactory.clone(character).addDisadvantage().create();
    };
    let handleAddTalent = ()=>{
        character = characterFactory.clone(character).addTalent().create();
    };
    let handleAddMagicalTalent = ()=>{
        character = characterFactory.clone(character).addMagicalTalent().create();
    };

</script>
<h1>{character.getUniqueName()}</h1>
{#if character.isHigherPower}
    <p>{character.alignment+ " " +character.race +" "+character.gender+" higher power being of "+ character.profession}</p>
    {:else}
    <p>{character.alignment +" and "+ character.nobility+" "+character.race +" "+character.gender+" "+ character.profession}</p>
    {/if}

<div>
    <li class="no-list-style bold inline">Homeland:</li>
    <li class="no-list-style bold inline"><a href={"#"+character.homeContinent.getUniqueName()}>{character.homeContinent.getUniqueName()}</a></li>
</div>
<ul class="fix-list-left">
    <li class="inline bold no-list-style">Motivation: </li>
    <li class="inline no-list-style">{character.motivation}</li>
</ul>
<ul>
    <li>Courage: {character.courage}</li>
    <li>Charisma: {character.charisma}</li>
    <li>Wisdom: {character.wisdom}</li>
    <li>Intuition: {character.intuition}</li>
    <li>Dexterity: {character.dexterity}</li>
    <li>Manual Dexterity: {character.manualDexterity}</li>
    <li>Constitution: {character.constitution}</li>
    <li>Strength: {character.strength}</li>
</ul>
{#key character}
    <button class="left" on:click={handleAddCurse}>+</button>
    <ul class="fix-list-left">
        <li class="bold inline no-list-style">Curses: </li>
        {#each character.curses as curse}
            <li class="inline no-list-style">{curse+ "/ "}</li>
        {/each}
        <li class="no-list-style"></li>
    </ul>

    <button class="left" on:click={handleAddAdvantage}>+</button>
    <ul class="fix-list-left">
        <li class="bold inline no-list-style">Advantages: </li>
        {#each character.advantages as advantage}
            <li class="inline no-list-style">{advantage+"/ "}</li>
        {/each}
        <li class="no-list-style"></li>
    </ul>

    <button class="left" on:click={handleAddDisadvantage}>+</button>
    <ul class="fix-list-left">
        <li class="bold inline no-list-style">Disadvantages: </li>
        {#each character.disadvantages as disadvantage}
            <li class="inline no-list-style">{disadvantage+"/ "}</li>
        {/each}
        <li class="no-list-style"></li>
    </ul>

    <button class="left" on:click={handleAddTalent}>+</button>
    <div class="bold">Talents:</div>
    <ul>
        {#each character.talents as talent}
            <li>{talent}</li>
        {/each}
    </ul>

    <button class="left" on:click={handleAddMagicalTalent}>+</button>
    <div class="bold">Magical Talents:</div>
    <ul>
        {#each character.magicalTalents as talent}
            <li>{talent}</li>
        {/each}
    </ul>


    <div class="bold">Relationships:</div>
    <ul>
        {#each character.relationships as relationship}
            <li>{relationship.getRelationshipTypeToOtherChar(character).valueOf()+" with \""}
                <a href={"#"+relationship.getOtherChar(character).getUniqueName()}>{relationship.getOtherChar(character).getUniqueName()+"\""}</a>
            </li>
        {/each}
    </ul>

    {#if character.artefacts.length > 0}
        <div class="bold">Artefacts:</div>
        <ul>
            {#each character.artefacts as artefact}
                <li><a href={"#"+artefact.getUniqueName()}>{artefact.getUniqueName()}</a></li>
            {/each}
        </ul>
    {/if}
{/key}
<style>
    .left{
        position: relative;
        top: 20px;
        left: -30px;
        z-index: 100;
    }
    .inline{
        display: inline;
    }

    .no-list-style{
        list-style-type: none;
    }

    .bold{
        font-weight: bold;
    }

    .fix-list-left{
        position: relative;
        left: -40px;
    }
    ul{
        margin: 1px;
    }
</style>