<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {generateName} from "./otherTables/nameGenerator";
    import Modal from "../components/Modal.svelte";
    import {characters, currentChar} from "../world/stores/charStore";
    import {Character} from "../world/character";

    import TableIndex from "../components/TableIndex.svelte";
    import {allTables} from "./tableList.js";

    let handleGenerateName = () =>{
        isModalVisible = true;
        generatedName = generateName(maxNumberOfSyllabus)
    };
    let generatedName = "";
    let isModalVisible = false;
    let handleAdd = () =>{
        $currentChar = new Character();

        $characters.push($currentChar)
        isModalVisible = false;
    };
    let maxNumberOfSyllabus = 7;
    let indexTitles = ["Character", "Locations", "Artefacts", "Other"];
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