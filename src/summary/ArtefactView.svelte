<script lang="ts">
    import {Artefact} from "../entites/artefacts/artefact";

    export let artefact : Artefact;
</script>

<h1>{artefact.getUniqueName()}</h1>
<p>{artefact.toString()}</p>