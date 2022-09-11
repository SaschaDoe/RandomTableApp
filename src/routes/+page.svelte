<script>
    import Header from '../components/Header.svelte'
    import Footer from "../components/Footer.svelte";
</script>


<main>
    <Header contentEditable>Header</Header>
    <article contentEditable>Content</article>
    <Footer contentEditable>Footer</Footer>
</main>


<style>
    main{
        display:flex;
        flex-direction:column;
        height:100vh;
        margin:0;
    }

</style>
