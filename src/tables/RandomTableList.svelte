<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {generateName} from "./nameTables/nameGenerator";
    import Modal from "../components/Modal.svelte";
    import {characters, currentChar} from "../entites/character/charStore";
    import TableIndex from "../components/TableIndex.svelte";
    import {allTables} from "./tableList.js";
    import {CharacterFactory} from "../entites/character/characterFactory";

    let handleGenerateName = () =>{
        isModalVisible = true;
        generatedName = generateName(maxNumberOfSyllabus)
    };
    let generatedName = "";
    let isModalVisible = false;
    let handleAdd = () =>{
        let character = new CharacterFactory().withName(generatedName).create();
        $characters.push(character)
        isModalVisible = false;
    };
    let maxNumberOfSyllabus = 7;
</script>

<TableIndex></TableIndex>

<Modal bind:isVisible={isModalVisible}
       title={"Name"}
       bind:text={generatedName}
       handleAdd={handleAdd}
       handleRole={handleGenerateName}/>
<div >
    <input type="number" bind:value={maxNumberOfSyllabus}/>
    <button on:click={handleGenerateName}>Generate Name</button>
    <ul>
        {#each allTables as table}
            <div id={table.title}>
                <RandomTable table={table}></RandomTable>
            </div>
        {/each}
    </ul>
</div>

<div class="back-btn">
    <a href="#top">/|\</a>
</div>


<style>
    li{
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    input{
        width: 30px;
    }

    .back-btn{
        position: fixed;
        top: 10%;
        left: 95%;
        z-index: 100;
        background-color: rgba(0,0,0, 0.9);
    }

    .back-btn > a{
        color: white;
    }

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blueviolet;
    }
</style>