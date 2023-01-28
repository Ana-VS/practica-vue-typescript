import { GetterTree } from "vuex";
import { IProductsState } from "./state";

const getters: GetterTree <IProductsState, any> = {
    getProducts(state) {
        return state.products;
    }, 
    getIsLoading (state) {
        return state.isLoading;
    },
    getSelectedProduct (state) {
        return state.selectedProduct;
    }
}

export default getters;