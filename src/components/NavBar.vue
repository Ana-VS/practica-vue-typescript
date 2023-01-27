<template>
   <nav>   
        <div class="logo">
            <img src="../assets/logo.png">
            <h1>VueShop</h1>
        </div>
      
        <input type="text" placeholder="¿Qué estas buscando?">
      
        <div class="buttons">
            <custom-button class="logout">
                <span>Log Out</span>
                <template v-slot:icon><span>✖</span></template>            
            </custom-button>   
        </div>          
   </nav>
</template>  

<script lang="ts">
import  {defineComponent} from 'vue';

import CustomButton from './CustomButton.vue';

export default defineComponent({
    name:'NavBar',
    components: {
        CustomButton,
    }
})
</script>

<style scoped>
    nav {
        width: 100%;
        height: 66px;
        border-bottom: 1px solid #35495e;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        width: 100%;
        height: 80%;
        margin: 0 30px;
        border: none;
    }
    .logo {
        display:flex;
        justify-content: space-between;
    }
    
    .logout {
        width: 100px;
        height: 55px;
        font-size: 13px;
    }
    img {height: 55px;}
    h1 {
        font-family: 'Roboto' sans-serif;
        font-weight: bold;
        color: #41b883;
    }
</style>