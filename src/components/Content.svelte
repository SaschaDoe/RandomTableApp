<script lang="ts">
    import {currentPage, Pages} from "../menue/navigationStore.js";
    import RandomTableList from "../tables/RandomTableList.svelte";
    import SummaryView from "../summary/SummaryView.svelte";
</script>

<div class="container">
    {#if $currentPage === Pages.RandomTablePage.valueOf()}
        <RandomTableList/>
    {/if}
    {#if $currentPage === Pages.SummaryPage.valueOf()}
        <SummaryView/>
    {/if}
</div>

<style>
    .container{
        width: 75%;

        margin: 0 auto 20px auto;
    }
</style>