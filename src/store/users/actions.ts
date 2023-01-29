import vueShopApi from "@/api/vueShopApi";
import { User } from "@/models/users";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";



const actions: ActionTree<IUsersState, IState> = {
    async fetchUsers ({commit}) {
         
        commit('setIsLoading', true)
        const { data } = await vueShopApi.get<unknown, AxiosResponse<User[]>>('/users'); 

        commit('setIsLoading', false) 
        commit('setUsers', data) 
    },
    async fetchUserById ({commit}, userId:number) {
        
        commit('setIsLoading', true)

        
        const { data } = await vueShopApi.get<unknown, AxiosResponse<User>>(`/users/${userId}`);

         
        commit('setIsLoading', false);

        
        commit('setSelectedUser', data);
    }, 
   
}

export default actions;