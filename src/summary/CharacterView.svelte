<script lang="ts">
    import {Character} from "../world/character";

    export let character: Character;

</script>

<h1>{character.getUniqueName()}</h1>
<p>{character.gender}</p>
<p>{character.race}</p>
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
<div>Disadvantages:</div>
{#each character.disadvantages as advantage}
    <div>{advantage+" "}</div>
{/each}
<div>Relationships:</div>
{#each character.relationships as relationship}
    <div>{relationship.getRelationshipTypeToOtherChar(character).valueOf()+" with \""+relationship.getOtherChar(character).getUniqueName()+"\""}</div>
{/each}
