<script lang="ts">
    import {TableEntry} from "./tableEntry";

    export let entry : TableEntry;
</script>

<tr>
    <td>{entry.toString()}</td>
    <td>{entry.textWithCascades}</td>
</tr>

<style>
    td{
        border: 1px solid;
    }
</style>