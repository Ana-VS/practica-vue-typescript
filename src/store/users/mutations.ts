import { User } from "@/models/users";
import { MutationTree } from "vuex";
import { IUsersState } from "./state";



const mutations: MutationTree <IUsersState> = { 
    setUsers (state: IUsersState, users: User[]) { 
        state.users = users;
    },
    setIsLoading (state: IUsersState, value: boolean) {
        state.isLoading = value;
    },
    setSelectedUser (state:IUsersState, user:User) {
        state.selectedUser = user;
    },
    
}

export default mutations;