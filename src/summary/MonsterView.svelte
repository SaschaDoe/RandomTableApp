<script lang="ts">
    import {Monster} from "../entites/monster/monster";

    export let monster : Monster;
</script>

<h1>{monster.getUniqueName()}</h1>
<p>{"a "+monster.adjective  +" "+ monster.gender + " " + monster.description}</p>
<div>{"Eating habit: "+monster.meal}</div>
<div>{"It reproduces by "+monster.reproduction}</div>

<ul class="fix-list-left">
    <li class="inline bold no-list-style">Motivation: </li>
    <li class="inline no-list-style">{monster.motivation}</li>
</ul>
<ul>
    <li>Courage: {monster.courage}</li>
    <li>Charisma: {monster.charisma}</li>
    <li>Wisdom: {monster.wisdom}</li>
    <li>Intuition: {monster.intuition}</li>
    <li>Dexterity: {monster.dexterity}</li>
    <li>Manual Dexterity: {monster.manualDexterity}</li>
    <li>Constitution: {monster.constitution}</li>
    <li>Strength: {monster.strength}</li>
</ul>

<ul class="fix-list-left">
    <li class="bold inline no-list-style">Curses: </li>
    {#each monster.curses as curse}
        <li class="inline no-list-style">{curse+ "/ "}</li>
    {/each}
    <li class="no-list-style"></li>
</ul>

<ul class="fix-list-left">
    <li class="bold inline no-list-style">Advantages: </li>
    {#each monster.advantages as advantage}
        <li class="inline no-list-style">{advantage+"/ "}</li>
    {/each}
    <li class="no-list-style"></li>
</ul>

<ul class="fix-list-left">
    <li class="bold inline no-list-style">Disadvantages: </li>
    {#each monster.disadvantages as disadvantage}
        <li class="inline no-list-style">{disadvantage+"/ "}</li>
    {/each}
    <li class="no-list-style"></li>
</ul>
<div class="bold">Talents:</div>
<ul>
    {#each monster.talents as talent}
        <li>{talent}</li>
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
    ul{
        margin: 1px;
    }
</style>