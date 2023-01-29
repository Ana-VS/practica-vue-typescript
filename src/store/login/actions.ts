import vueShopApi from "@/api/vueShopApi";
import { Token } from "@/models/token";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { ILoginState } from "./state";
import { Login } from "@/models/login";
import { IState } from "..";
import router from "@/router";


const actions: ActionTree<ILoginState, IState> = {
    async fetchToken ({commit}, access: Login) {
         
        const { data } = await vueShopApi.post<unknown, AxiosResponse<Token>>('/auth/login', {email: access.email, password: access.password} );
        commit ('setIsLogged', true);
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('refreshToken', data.access_token)
        commit ('setToken', data)
        router.push('/')
    },
    isUserLogged({ commit }) {
        if (localStorage.getItem("token") ?? "") {          
          commit("isLogged", true);
        } else {
          commit("isLogged", false);
          router.push("/login");
          commit("setToken", {});
        }
      },
}

export default actions;