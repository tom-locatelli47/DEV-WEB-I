import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue'),
    },

    {
      path: '/envio',
      name: 'envio',
      
      component: () => import('../views/EnvioView.vue'),
    },

    {
      path: '/devolucao',
      name: 'devlucao',
      
      component: () => import('../views/DevolucaoView.vue'),
    },
    
    {
      path: '/equipe',
      name: 'equipe',
      
      component: () => import('../views/EquipeView.vue'),
    },

    {
      path: '/termo',
      name: 'termo',
      
      component: () => import('../views/TermoView.vue'),
    },

  ],
})

export default router
