import { Module } from "vuex";
import { IUsersState } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


const usersModule: Module <IUsersState, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default usersModule;