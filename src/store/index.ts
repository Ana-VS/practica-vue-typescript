import { User } from '@/models/users'
import { createStore } from 'vuex'
import loginModule from './login'
import productsModule from './products'
import usersModule from './users'

export interface IState {
  authUser: User | null
}

export default createStore({
  state: {
    token: "",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule,
    users: usersModule,
    login: loginModule,
  }
})
