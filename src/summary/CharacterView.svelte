<script lang="ts">
    import {Character} from "../world/character";

    export let character: Character;

</script>

<h1>{character.getUniqueName()}</h1>
<p>{character.nobility+" "+character.race +" "+character.gender+" "+ character.profession}</p>
<p>Motivation: {character.motivation}</p>
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
<div style="display:inline;">Curses: </div>
<ul style="display: inline">
    {#each character.curses as curse}
        <li style="list-style-type: none">{curse}</li>
    {/each}
</ul>

<div>Advantages:
    {#each character.advantages as advantage}
        <div>{advantage+" "}</div>
    {/each}
</div>

<div>Disadvantages:
{#each character.disadvantages as advantage}
    <div>{advantage+" "}</div>
{/each}
</div>

<div>Relationships:</div>
{#each character.relationships as relationship}
    <div>{relationship.getRelationshipTypeToOtherChar(character).valueOf()+" with \""}
        <a href={"#"+relationship.getOtherChar(character).getUniqueName()}>{relationship.getOtherChar(character).getUniqueName()+"\""}</a>
    </div>
{/each}
