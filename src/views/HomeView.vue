<template>
  <NavBar />
  <div class="home">
      <div v-if="isLoading">
          Cargando productos... 
      </div>
      <div class="product-list" v-else>
         <ProductItem v-for="product in products" 
         :key="product.id" 
         :product="product"          
         > 
            <template v-slot:button>
                <CustomButton class="detail" @click="goDetail(product)">
                  <span>Detalle</span>
                  <template v-slot:icon><span> 👀</span></template>
                </CustomButton>
            </template>
          </ProductItem>
      </div>
  </div>
  <CustomFooter />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue';
  import CustomFooter from '@/components/CustomFooter.vue'
  import useProducts from '@/composables/useProducts';
  import ProductItem from '@/components/ProductItem.vue';
  import CustomButton from '@/components/CustomButton.vue';
  import { Product } from '@/models/products';
  import products from '@/store/products';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomeView',
    components: {
      NavBar,
      CustomFooter, 
      ProductItem, 
      CustomButton,
    },
    setup() {
      const {products, isLoading, fetchProducts} = useProducts();
      const router = useRouter();

      fetchProducts();

      return {
        products,
        isLoading,
        goDetail: (product:Product) => router.push({name:'detail', params: {id: product.id}})
      }
    }
  });
</script>

<style scoped>

.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
  box-sizing: border-box;
  padding: 30px; 
  justify-content: center;
}

.detail {
  height:50%;
}

</style>
