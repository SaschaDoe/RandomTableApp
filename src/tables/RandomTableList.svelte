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

    let tables = [new RaceTable(),
        new GenderTable(),
        new AnimalTable(),
        new DisadvantageTable(),
        new CurseTable(),
        new MotivationTable(),
        new GermanMaleNameTable(),
        new GermanFemaleNameTable(),
        new RelationshipTypeTable(),];
</script>


<ul>
    {#each tables as table}
        <RandomTable table={table}></RandomTable>
    {/each}
</ul>


<style>

</style>