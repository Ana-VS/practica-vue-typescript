<template>
    <div class="item">
        <div class="image">
            <img :src="product.images[0]" :alt="product.title">
        </div>
        <div class="info">
            <div class="data">
                <div class="title">{{ product.title }}</div>
                <div class="price">{{ product.price }} €</div>
            </div>
            <slot name="button"></slot>
        </div>    
    </div>
</template>

<script lang="ts">
import { Product } from '@/models/products';
import  {defineComponent, PropType} from 'vue';

export default defineComponent({
    name:'CustomItem',
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true,
        }
    }
})
</script>

<style scoped>
.item {
    border: 1px solid #35495e;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 #41b883;
    width: 350px;
}
.info {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;  
}
.image {
    width: 50%;  
    box-sizing: border-box;
    padding: 5px;  
    margin: 0 auto;
}
.image > img {
    width:100%;
    height: auto;
    
}
.data, .price, .title {
    box-sizing: border-box;
    padding:5px;
}
.title {
    font-size: 20px;
    font-weight: bolder;
}
</style>