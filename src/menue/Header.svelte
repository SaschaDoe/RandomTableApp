<script lang="ts">
    import {currentPage} from './navigationStore'
    import {Pages} from "./navigationStore.js";
    import {updateIndex} from "../summary/updateSummaryIndex.js";


</script>

<header class="fixed-header">
    <h1>
        <div class="container">
            <nav>
                <button class="random-table-btn" on:click={() => $currentPage = Pages.RandomTablePage}>Random Tables</button>
                <button class="summary-btn" on:click={() => {$currentPage = Pages.SummaryPage; updateIndex()}}>Summary</button>
            </nav>
        </div>
    </h1>
</header>

<style>
    .fixed-header{
        width: 100%;
        position: fixed;
        background: #333;
        padding: 10px 0;
        color: #fff;
        top: 0;
    }

    button{
        color: #fff;
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        font-size: large;
    }
    .random-table-btn{
        position: absolute;
        left: 20%;
        top: 10px;
    }
    .summary-btn{
        position: absolute;
        left: 60%;
        top: 10px;
    }
</style>