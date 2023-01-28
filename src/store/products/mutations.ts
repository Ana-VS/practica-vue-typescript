import { Product } from "@/models/products";
import { MutationTree } from "vuex";
import { IProductsState } from "./state";


const mutations: MutationTree<IProductsState> = {
    setProducts (state, products: Product[]) {
        state.products = products;
    }, 
    setIsLoading (state, isLoading: boolean) {
        state.isLoading = isLoading;
    },
    setSelectedUser (state, product: Product) {
        state.selectedProduct = product;
    }
}

export default mutations;