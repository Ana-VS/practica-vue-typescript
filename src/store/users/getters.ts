import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
    getUsers (state) {
        return state.users
    },
    getIsLoading (state) {
        return state.isLoading
    },
    getSelectedUser (state) {
        return state.selectedUser
    }, 
    
}
export default getters;
