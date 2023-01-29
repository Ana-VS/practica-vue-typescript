<template>
    <NavBar />
    <div v-if="!isLoading" class="container">
        <div class="item">
            <div class="images">
                <div class="image">
                    <img :src="product.images[0]" alt="Product image">
                </div>
            </div>
            <div class="data">
                <ul>
                    <li class="title">{{ product.title }}</li>
                    <li class="description">{{ product.description }}</li>
                    <li class="price">{{ product.price }} €</li>
                </ul>
                <custom-button class="back" @click="goBack">
                    <router-link :to="{name:'home'}">Go back</router-link>
                    <template v-slot:icon><span>⬅</span></template>            
                </custom-button>   
            </div>            
        </div>
    </div>
    <div v-else>Loading...</div>
    <CustomFooter />
</template>


<script lang="ts">

import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import CustomButton from "@/components/CustomButton.vue";
import router from "@/router";


export default defineComponent({
    components: {
        NavBar,
        CustomFooter,
        CustomButton
    },
    props: {
        id: {
        type: Number,
        required: true,
        },
         
    },
    setup(props) {
        
        const { product, isLoading, fetchProductById } = useProducts();
        
        fetchProductById (props.id);

        return {
        NavBar,
        CustomFooter,
        CustomButton,        
        product,      
        isLoading,
        goBack: () => router.push({name:'home'})
        };
    },
    });
</script>

<style scoped>
* {
    list-style: none;  
}
.item {    
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    justify-items: auto;   
    max-width: 80%;  
    border: 1px solid #35495e;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 #41b883;  
    box-sizing: border-box;
    padding: 20px;
    
}

.data {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
}

li {
   margin: 10px 0; 
}
.title, .price {
    font-size: 30px;
    font-weight: bolder;
}
.description {
    font-size:25px;
}
.back {
    width: 100px;
    height: 55px;
    font-size: 13px;
    margin: 0 auto;
}
.image {
    max-height: fit-content;
}
</style>