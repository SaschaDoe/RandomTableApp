<script lang="ts">
    import {Character} from "../world/character";

    export let character = new Character();

</script>

<h1>{character.getUniqueName()}</h1>
<p>{character.alignment +" and "+ character.nobility+" "+character.race +" "+character.gender+" "+ character.profession}</p>
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

{#if character.curses.length !== 0}
    <ul class="fix-list-left">
        <li class="bold inline no-list-style">Curses: </li>
        {#each character.curses as curse}
            <li class="inline no-list-style">{curse+ "/ "}</li>
        {/each}
        <li class="no-list-style"></li>
    </ul>
{/if}
<ul class="fix-list-left">
    <li class="bold inline no-list-style">Advantages: </li>
    {#each character.advantages as advantage}
        <li class="inline no-list-style">{advantage+"/ "}</li>
    {/each}
    <li class="no-list-style"></li>
</ul>

<ul class="fix-list-left">
    <li class="bold inline no-list-style">Disadvantages: </li>
    {#each character.disadvantages as disadvantage}
        <li class="inline no-list-style">{disadvantage+"/ "}</li>
    {/each}
    <li class="no-list-style"></li>
</ul>

<div class="bold">Relationships:</div>
<ul>
    {#each character.relationships as relationship}
        <li>{relationship.getRelationshipTypeToOtherChar(character).valueOf()+" with \""}
            <a href={"#"+relationship.getOtherChar(character).getUniqueName()}>{relationship.getOtherChar(character).getUniqueName()+"\""}</a>
        </li>
    {/each}
</ul>

<style>
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
</style>