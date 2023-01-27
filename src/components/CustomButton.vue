<template>
    <button>
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<style scoped>
button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto' sans-serif;
    font-weight: bold;
    color: #35495e;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 15px;
    background-color: #41b883;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
button:hover, button:focus, .button-active {
    box-shadow: 0 0 20px rgba(0,0,0,0.5) ;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>