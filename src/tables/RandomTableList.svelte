<script lang="ts">
    import RandomTable from "./RandomTable.svelte";
    import {RaceTable} from "./charTables/raceTable";
    import {AnimalTable} from "./charTables/animalTable";
    import {GermanMaleNameTable} from "./charTables/germanMaleNameTable";
    import {GenderTable} from "./charTables/genderTable";
    import {DisadvantageTable} from "./charTables/disadvantageTable";
    import {MotivationTable} from "./charTables/motivationTable";
    import {GermanFemaleNameTable} from "./charTables/germanFemaleNameTable";
    import {RelationshipTypeTable} from "./charTables/relationshipTypeTable";
    import {CurseTable} from "./charTables/curseTable";
    import {FantasyCreatureTable} from "./charTables/fantasyCreatureTable";
    import {NobilityTable} from "./charTables/nobilityTable";
    import {ProfessionTable} from "./charTables/professionTable";
    import {AttributeTable} from "./charTables/attributeTable";
    import {SenseTable} from "./charTables/senseTable";
    import {AdvantageTable} from "./charTables/advantageTable";

    let tables = [
        //Character Tables
        new RaceTable(),
        new GenderTable(),
        new AnimalTable(),
        new FantasyCreatureTable(),
        new NobilityTable(),
        new AdvantageTable(),
        new DisadvantageTable(),
        new CurseTable(),
        new ProfessionTable(),
        new MotivationTable(),
        new GermanMaleNameTable(),
        new GermanFemaleNameTable(),
        new RelationshipTypeTable(),

        //Other
        new AttributeTable(),
        new SenseTable(),
        ];
    let handleShowIndex = () => {
        showIndex = !showIndex;
    };
    let showIndex = false;
</script>

{#if showIndex === false}
    <div class="index-dropdown" on:click={handleShowIndex}>-></div>
{:else}
<div class="index-overlap">
    <div class="index-dropdown-close" on:click={handleShowIndex} >&lt;-</div>
        <ul>
            {#each tables as table}
                <li>
                    <a class="index-overlap-element" href={"#"+table.title}>{table.title}</a>
                </li>
            {/each}
        </ul>
</div>
{/if}



<div id="#top" class="index">
    <ul>
        {#each tables as table}
            <li>
                <a href={"#"+table.title}>{table.title}</a>
            </li>
        {/each}
    </ul>
</div>

<div >
    <ul>
        {#each tables as table}
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

    .index{
        position: fixed;
        top: 5%;
        left: -30px;
        visibility: hidden;
        max-height: 90%;
        overflow: scroll;
    }

    .index-overlap{
        position: fixed;
        top: 5%;
        left: -30px;
        visibility: visible;
        max-height: 90%;
        overflow: scroll;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .index-overlap-element{
        color: white;
    }

    .index-dropdown{
        position: fixed;
        top: 50%;
        left: 0;
        visibility: visible;
        font-size: x-large;
        background-color: rgba(0,0,0, 0.9);
        color: white;
    }

    .index-dropdown-close{
        position: fixed;
        top: 50%;
        left: 110px;
        visibility: visible;
        font-size: x-large;
        color: white;
        background-color: rgba(0,0,0, 0.9);
    }

    .index-dropdown:hover{
        cursor: pointer;
    }

    .index-dropdown-close:hover{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: black;
    }

    a:hover{
        color: blueviolet;
    }

    @media screen and (min-width: 720px) {
        .index{
            visibility: visible;
        }

        .index-overlap{
            visibility: hidden;
        }

        .index-dropdown{
            visibility: hidden;
        }

        .index-dropdown-close{
            visibility: hidden;
        }
    }
</style>