<script>
    import Modal from "../components/Modal.svelte";
    import {isModalVisible} from "../menue/modalStore.js";
    import CharacterView from "../summary/CharacterView.svelte";
    import {Character} from "../world/character.js";
    import {characters} from "../world/worldStore.js";

    function handleCloseModal() {
       $isModalVisible = false;

    }

    const handleAdd = () => {
        $characters.push(character)
        $isModalVisible = false;
    };

    export let character = new Character();
</script>

<Modal on:close="{handleCloseModal}">
    <CharacterView
            character={character}
    />
    <button on:click={handleAdd}>Add</button>
</Modal>
