<script lang="ts">
    export let text = "Hello";
    export let isVisible = false;
    const handleClose = () => {
        isVisible = false;
    };

    export let handleAdd = () =>{

    }

    const handle_keydown = e => {
        if (e.key === 'Escape') {
            close();
            return;
        }

        if (e.key === 'Tab') {
            // trap focus
            const nodes = modal.querySelectorAll('*');
            const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

            let index = tabbable.indexOf(document.activeElement);
            if (index === -1 && e.shiftKey) index = 0;

            index += tabbable.length + (e.shiftKey ? -1 : 1);
            index %= tabbable.length;

            tabbable[index].focus();
            e.preventDefault();
        }
    };

    let modal;
</script>

<svelte:window on:keydown={handle_keydown}/>

{#if isVisible}
    <div class="modal-background" on:click={handleClose}>
    <div class="fixed">
        <div class="modal">
            <div class="modal-text">{text}</div>
            <button class="modal-btn" on:click={handleClose}>X</button>
            <button class="add-btn" on:click={handleAdd}>Add entity</button>
        </div>
    </div>
    </div>
{/if}

<style>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
    }

    .fixed{
    border: 2px solid black;
    position: fixed;
    z-index: 10;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

    .modal{
    width: 320px;
    height: 200px;
    background: grey;
}

    .modal-text{
    position: relative;
    left: 10%;
    top: 30%;
}

    .modal-btn{
    position: relative;
    left: 300px;
    top: -18px;
    background-color: transparent;
}
    .add-btn{
        position: relative;
        left: 30%;
        top: 77%;
    }
</style>