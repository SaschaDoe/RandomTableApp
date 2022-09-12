<script lang="ts">
    import {Character} from "../world/character";

    export let character = new Character();

</script>

<h1>{character.name}</h1>
<p>{character.gender}</p>
<p>{character.race}</p>
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
