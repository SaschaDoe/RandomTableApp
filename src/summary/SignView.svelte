<script lang="ts">
    import {Sign} from "../entites/signs/sign.js";

    export let sign: Sign;
</script>

<h1>{sign.getUniqueName() + " " + sign.type}</h1>
<p>{sign.toString()}</p>