<script lang="ts">
    import {Nation} from "../entites/nations/nation.js";

    export let nation: Nation;
</script>

<h1>{nation.getUniqueName()}</h1>
<p>{nation.toString()}</p>