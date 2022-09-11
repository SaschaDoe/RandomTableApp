<script lang="ts">
    import Header from '../components/Header.svelte'
    import Footer from "../components/Footer.svelte";
    import RandomTables from "../tables/RandomTableList.svelte";
    import RandomTableList from "../tables/RandomTableList.svelte";
</script>


<main>
    <Header/>
    <RandomTableList/>
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
