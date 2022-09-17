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
    import {AlignmentTable} from "./charTables/alignmentTable";
    import {AttitudeTable} from "./charTables/attitudeTable";
    import {SizeTable} from "./otherTables/sizeTable";
    import {LocationTable} from "./otherTables/locationTable";
    import {WeatherTable} from "./otherTables/weatherTable";
    import {ContinentTable} from "./locationTables/continentTable";
    import {VocalTable} from "./otherTables/vocalTable";
    import {generateName} from "./otherTables/nameGenerator";
    import Modal from "../components/Modal.svelte";
    import {characters, currentChar} from "../world/charStore";
    import {Character} from "../world/character";
    import {RarityTable} from "./otherTables/rarityTable";
    import {QualityTable} from "./otherTables/qualityTable";
    import {WeaponTable} from "./artefactTables/weaponTable";
    import {ArmorTable} from "./artefactTables/armorTable";
    import {BodyPartsTable} from "./otherTables/bodyPartsTable";
    import {JewelryTable} from "./artefactTables/jewelryTable";
    import {GemstoneTable} from "./artefactTables/gemstoneTable";
    import {MaterialsTable} from "./artefactTables/materialsTable";
    import {SphereTable} from "./locationTables/sphereTable";
    import {ElementTable} from "./otherTables/elementTable";

    let charTables = [
        new RaceTable(),
        new GenderTable(),
        new AnimalTable(),
        new FantasyCreatureTable(),
        new NobilityTable(),
        new AlignmentTable(),
        new AttitudeTable(),
        new AdvantageTable(),
        new DisadvantageTable(),
        new CurseTable(),
        new ProfessionTable(),
        new MotivationTable(),
        new GermanMaleNameTable(),
        new GermanFemaleNameTable(),
        new RelationshipTypeTable(),
        ];
    let locationTables = [
        new ContinentTable(),
        new SphereTable(),
    ]
    let artefactsTables = [
        new WeaponTable(),
        new ArmorTable(),
        new JewelryTable(),
        new GemstoneTable(),
        new MaterialsTable(),
    ]
    let otherTables = [
        new AttributeTable(),
        new SenseTable(),
        new SizeTable(),
        new LocationTable(),
        new WeatherTable(),
        new VocalTable(),
        new RarityTable(),
        new QualityTable(),
        new BodyPartsTable(),
        new ElementTable(),
    ]

    let allTables = charTables.concat(locationTables).concat(artefactsTables).concat(otherTables);
    let handleShowIndex = () => {
        showIndex = !showIndex;
    };
    let showIndex = false;
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
</script>

{#if showIndex === false}
    <div class="index-dropdown" on:click={handleShowIndex}>-></div>
{:else}
<div class="index-overlap">
    <div class="index-dropdown-close" on:click={handleShowIndex} >&lt;-</div>
        <ul>
            {#each allTables as table}
                <li>
                    <a class="index-overlap-element" href={"#"+table.title}>{table.title}</a>
                </li>
            {/each}
        </ul>
</div>
{/if}



<div id="#top" class="index">
    <ul>
        {#each allTables as table}
            <li>
                <a href={"#"+table.title}>{table.title}</a>
            </li>
        {/each}
    </ul>
</div>
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