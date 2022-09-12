<script lang="ts">
    import Header from '../menue/Header.svelte'
    import Footer from "../components/Footer.svelte";
    import RandomTables from "../tables/RandomTableList.svelte";
    import RandomTableList from "../tables/RandomTableList.svelte";
    import {currentPage, Pages} from "../menue/navigationStore.js";
    import SummaryView from "../summary/SummaryView.svelte";
    import Content from "../components/Content.svelte";
</script>


<main>
    <Header/>
    <Content></Content>
    <Footer/>
</main>


<style>
    /* Add some padding on document's body to prevent the content
    to go underneath the header and footer */
    main{
        padding-top: 60px;
        padding-bottom: 40px;
    }


</style>
