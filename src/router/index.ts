import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import logInGuard from './loginGuard';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: logInGuard,
    component:() => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/products/:id',
    name: 'detail',
    component:() => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
    props: (route) => {
      const id = Number (route.params.id);
      return isNaN (id) ? { id: null } : { id }
    }
  },
  {
    path:'/login',
    name: 'login',
    component:() => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
