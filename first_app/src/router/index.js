import { createRouter, createWebHistory } from '@ionic/vue-router'; // Adiciona rotas com animação nativa
import MemoriesPage from '../pages/MemoriesPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path:'/details/:id',
    component: () => import('../pages/MemoryDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
