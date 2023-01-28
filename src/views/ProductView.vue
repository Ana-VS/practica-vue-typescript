<template>
    <NavBar />
    <div v-if="!isLoading">
        <div class="item">
            <div class="images">

            </div>
        <div class="data">
            <ul>
                <li>{{ product.title }}</li>
                <li>{{ product.description }}</li>
                <li>{{ product.price }}</li>
            </ul>
        </div>
        </div>
    </div>
    <div v-else>Cargando...</div>
    <custom-button class="back" @click="goBack">
        <router-link :to="{name:'home'}">Go back</router-link>
        <template v-slot:icon><span>⬅</span></template>            
    </custom-button>   
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

</style>