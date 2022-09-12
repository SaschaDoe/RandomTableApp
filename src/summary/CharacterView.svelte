<script lang="ts">
    import {Character} from "../world/character";

    export let character = new Character();
</script>

<h1>{character.name}</h1>
<p>{character.race}</p>