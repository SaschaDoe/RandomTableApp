<script>
    import Index from "./Index.svelte";
    import {indexesStore, titleStore} from "./indexListStore";

    export let headings = [];
    titleStore.subscribe(titles => {
        headings = titles;
    })

    export let indexes = [[]]
    indexesStore.subscribe(indexesStore => {
        indexes = indexesStore;
    })

    let toggleShowIndex = () => {
        showIndex = !showIndex;
    };
    let showIndex = false;
</script>
{#if showIndex === false}
    <div class="smartphone-visible open-overlap-btn" on:click={toggleShowIndex}>-></div>
{:else}
    <div class="index smartphone-visible overlap scrollable">
        {#each headings as heading, index}
            <Index title = {heading} indexes = {indexes[index]}></Index>
        {/each}
    </div>
    <div class="smartphone-visible close-overlap-btn" on:click={toggleShowIndex}>&lt;-</div>
{/if}
<div class="index widescreenVisible scrollable">
{#each headings as heading, index}
<Index title = {heading} indexes = {indexes[index]}></Index>
    {/each}
</div>

<style>
    div{
        background: #333;
        color: white;
        cursor: pointer;
    }
    .index{
        position: fixed;
        top: 40px;
        left: 0;
        max-width: 180px;
        max-height: 480px;
        visibility: hidden;
    }

    .scrollable{
        overflow: auto;
    }

    .overlap{
        z-index: 100;
    }

    .open-overlap-btn{
        position: fixed;
        left: 0;
        top: 50%;
    }

    .close-overlap-btn{
        position: fixed;
        width: 30px;
        height: 30px;
        left: 30%;
        top: 50%;
    }

    .widescreenVisible{
        visibility: hidden;
    }

    .smartphone-visible{
        visibility: visible;
    }

    @media screen and (min-width: 1000px) {
        .widescreenVisible{
            visibility: visible;
        }

        .smartphone-visible{
            visibility: hidden;
        }
    }
</style>