import { Login } from "@/models/login";
import { computed } from "vue";
import { useStore } from "vuex";

export const useLogin = () => {
    const store = useStore(); 
    return {
        // GETTERS
        token: computed(() => store.getters['login/getToken']),

        // ACTIONS
        fetchToken: (data:Login) => store.dispatch('login/fetchToken', data)
    }
}