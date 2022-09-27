<script lang="ts">
    import {Fraction} from "../entites/fractions/fraction.js";

    export let fraction: Fraction;
</script>

<h1>{fraction.getUniqueName()}</h1>
<div>{"Size: "+fraction.size}</div>
<div>{"Wealth: "+fraction.wealth}</div>
<div>{"Influence: "+fraction.influence}</div>
<div>{"Motivation: "+fraction.motivation}</div>
<div>{"Associated Talent: "+fraction.associatedTalent}</div>
<div>{"Leader: "}<a href={"#"+fraction.leader.getUniqueName()}>{fraction.leader.getUniqueName()}</a></div>
{#if fraction.members.length > 0}
    <div>Members:</div>
    <ul>
        {#each fraction.members as member}
            <li><a href={"#"+member.getUniqueName()}>{member.getUniqueName()}</a></li>
        {/each}
    </ul>
{/if}
{#if fraction.quests.length > 0}
    <div>Quests:</div>
    <ul>
        {#each fraction.quests as quest}
            <li>{quest}</li>
        {/each}
    </ul>
{/if}