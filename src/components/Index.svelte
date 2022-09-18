<script lang="ts">
    export let title = "Nothing"
    export let indexes = ["bla", "blub"]



    let toggleVisible = () => {
        isIndexesVisible = !isIndexesVisible
    }
    $: isIndexesVisible = false;


</script>
<div class="container">


    <div on:click = {toggleVisible}>{title+"("+indexes.length+")"}</div>
    {#if isIndexesVisible}
        <ul>
            {#each indexes as entity}
                <li>
                    <a href={"#"+entity}>{entity}</a>
                </li>
            {/each}
        </ul>
        {/if}
</div>

<style>
    .container{

    }
    div{
        background: #333;
        padding: 0 2px;
        color: #fff;
    }

    li{
        background: #333;
        padding: 0 2px;
        color: #fff;
        position: relative;
    }

    ul{
        padding: 0;
        margin: 0;
    }

    a{
        text-decoration: none;
        color: white;
    }

    @media screen and (min-width: 720px) {

    }
</style>
