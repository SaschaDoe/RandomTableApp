<script lang="ts">

</script>

<header class="fixed-header">
    <h1>
        <div class="container">
            <nav>
                <button class="random-table-btn">Random Tables</button>
                <button class="summary-btn">Summary</button>
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
        left: 27%;
        top: 10px;
    }
    .summary-btn{
        position: absolute;
        left: 60%;
        top: 10px;
    }
</style>