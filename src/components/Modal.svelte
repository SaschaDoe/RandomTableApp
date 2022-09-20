<script lang="ts">
    export let title = "Title";
    export let text = "Hello";
    export let isVisible = false;
    const handleClose = () => {
        isVisible = false;
    };

    export let handleAdd = () =>{

    }

    export let handleRole = () =>{

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
    <div class="modal-background" on:click={handleClose}></div>
    <div class="fixed">
        <div class="modal">
            <div class="title">{title}</div>
            <div class="modal-text">{text}</div>
            <button class="close-btn" on:click={handleClose}>X</button>
            <button class="role-again-btn" on:click={handleRole}>Role again</button>
            <button class="add-btn" on:click={handleAdd}>Add</button>
        </div>
    </div>

{/if}

<style>
    .modal-background {
        position: fixed;
        z-index: 7;
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
    width: 400px;
    height: 400px;
    background: grey;
}

    .modal-text{
        position: relative;
        max-width: 340px;
        left: 10%;
        top: 30%;
    }

    .title{
        font-size: larger;
        padding: 5px;
    }

    .close-btn{
    position: absolute;
    left: 380px;
    top: 0;
    background-color: transparent;
}
    .add-btn{
        position: absolute;
        left: 60%;
        top: 85%;
    }

    .role-again-btn{
        position: absolute;
        left: 20%;
        top: 85%;
    }
</style>