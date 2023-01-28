import vueShopApi from "@/api/vueShopApi";
import { Product } from "@/models/products";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, any> = {
    async fetchProducts({commit}) {
        commit('setIsLoading', true)

        const { data } = await vueShopApi.get<unknown, AxiosResponse<Product[]>>('/products');

        commit('setIsLoading', false)

        commit('setProducts', data)
    },

    async fetchProductById ({commit}, productId:number) {
        commit('setIsLoading', true)

        const { data } = await vueShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);

        commit('setIsLoading', false);

        commit('setSelectedUser', data);
    }
}

export default actions;